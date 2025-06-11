import { reportMapper } from '../../data/api-mapper';

export default class StoryDetailPresenter {
  #storyId;
  #view;
  #apiModel;
  #dbModel;

  constructor(storyId, { view, apiModel, dbModel }) {
    this.#storyId = storyId;
    this.#view = view;
    this.#apiModel = apiModel;
    this.#dbModel = dbModel;
  }

  async showSaveButton() {
    try {
      if (await this.#isStorySaved()) {
        this.#view.renderRemoveButton();
        return;
      }
      this.#view.renderSaveButton();
    } catch (error) {
      console.error('Error showing save button:', error);
      // Fallback ke tombol save jika terjadi error
      this.#view.renderSaveButton();
    }
  }

  async #isStorySaved() {
    try {
      const result = await this.#dbModel.getStoryById(this.#storyId);
      return !!result;
    } catch (error) {
      console.error('Error checking if story is saved:', error);
      return false;
    }
  }

  async showStoryDetailMap() {
    try {
      await this.#view.initialMap();
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  }

  async getAllStories() {
    try {
      this.#view.showStoriesLoading();
      const data = await this.#apiModel.getAllStories({ page: 1, size: 10 });

      if (data && Array.isArray(data.stories) && data.stories.length > 0) {
        this.#view.populateStories(data.stories);
      } else {
        console.log('No stories found, but this is not an error for detail page');
      }
    } catch (error) {
      console.error('Error fetching stories:', error);
    } finally {
      this.#view.hideStoriesLoading();
    }
  }

  async showStoryDetail() {
    try {
      this.#view.showStoryDetailLoading();
      const storyData = await this.#apiModel.getStoryById(this.#storyId);

      if (storyData && storyData.story) {
        const story = storyData.story;

        const isValidCoordinate = (
          typeof story.lat === 'number' &&
          typeof story.lon === 'number' &&
          !isNaN(story.lat) &&
          !isNaN(story.lon)
        );

        if (!isValidCoordinate) {
          console.warn('Cerita tidak memiliki koordinat lokasi yang valid.', {
            lat: story.lat,
            lon: story.lon
          });
        }

        this.#view.populateStoryDetailAndInitialMap('Story loaded successfully', story);
      } else {
        this.#view.populateStoryDetailError('Story not found');
      }
    } catch (error) {
      console.error('Error fetching story details:', error);
      this.#view.populateStoryDetailError('Failed to fetch story details');
    } finally {
      this.#view.hideStoryDetailLoading();
    }
  }

  async postNewComment(data) {
    try {
      this.#view.showSubmitLoadingButton();
      const response = await this.#apiModel.addComment(this.#storyId, data);

      if (response && response.ok) {
        this.#view.postNewCommentSuccessfully('Comment added successfully!');
        this.notifyReportOwner(response.data.id);
      } else {
        this.#view.postNewCommentFailed('Failed to add comment.');
      }
    } catch (error) {
      console.error('Error posting comment:', error);
      this.#view.postNewCommentFailed('Failed to add comment.');
    } finally {
      this.#view.hideSubmitLoadingButton();
    }
  }

  async notifyReportOwner(commentId) {
    try {
      const response = await this.#apiModel.sendCommentToReportOwnerViaNotification(
        this.#storyId,
        commentId
      );
      if (!response || !response.ok) {
        console.error('notifyReportOwner: response:', response);
        return;
      }
      console.log('notifyReportOwner:', response.message);
    } catch (error) {
      console.error('notifyReportOwner: error:', error);
    }
  }

  async notifyMe() {
    try {
      const response = await this.#apiModel.sendReportToMeViaNotification(this.#storyId);
      if (!response || !response.ok) {
        console.error('notifyMe: response:', response);
        return;
      }
      this.notifyReportOwner(response.data.id);
      console.log('notifyMe:', response.message);
    } catch (error) {
      console.error('notifyMe: error:', error);
    }
  }

  async getCommentsList() {
    try {
      this.#view.showCommentsLoading();
      const comments = await this.#apiModel.getCommentsByStoryId(this.#storyId);

      if (Array.isArray(comments)) {
        this.#view.populateComments(comments);
      } else {
        this.#view.populateComments([]);
      }
    } catch (error) {
      console.error('Error fetching comments:', error);
      this.#view.populateComments([]);
    } finally {
      this.#view.hideCommentsLoading();
    }
  }

  // Method untuk menyimpan story ke IndexedDB
  async saveStories() {
    try {
      const storyData = await this.#apiModel.getStoryById(this.#storyId);
      
      if (!storyData || !storyData.story) {
        throw new Error('Story data not found');
      }

      // Pastikan data story memiliki ID
      const story = {
        ...storyData.story,
        id: this.#storyId
      };

      await this.#dbModel.putStories(story);
      this.#view.saveToBookmarkSuccessfully('Berhasil menyimpan cerita ke bookmark');
    } catch (error) {
      console.error('saveStories: error:', error);
      this.#view.saveToBookmarkFailed(error.message || 'Gagal menyimpan cerita');
    }
  }

  // Method untuk menghapus story dari IndexedDB
  async removeStories() {
    try {
      await this.#dbModel.removeStories(this.#storyId);
      this.#view.removeFromBookmarkSuccessfully('Berhasil menghapus cerita dari bookmark');
    } catch (error) {
      console.error('removeStories: error:', error);
      this.#view.removeFromBookmarkFailed(error.message || 'Gagal menghapus cerita dari bookmark');
    }
  }
}