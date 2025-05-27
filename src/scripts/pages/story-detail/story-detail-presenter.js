import { getAllStories, getStoryById } from '../../data/api'; // Import the correct function

export default class StoryDetailPresenter {
  constructor(storyId, { view, apiModel }) {
    this.storyId = storyId;
    this.view = view;
    this.apiModel = apiModel;
  }
 async showStoryDetailMap() {
    // Handle logic for initializing the map here
    await this.view.initialMap();
  }
  async getAllStories() {
    try {
      const data = await this.apiModel.getAllStories({ page: 1, size: 10 });
      if (data.ok) {
        this.view.populateStories(data.stories);  // Update with the correct field
      } else {
        this.view.populateStoriesError('Failed to fetch stories');
      }
    } catch (error) {
      console.error('Error fetching stories:', error);
      this.view.populateStoriesError('Failed to fetch stories');
    }
  }

  async showStoryDetail() {
    try {
      const storyData = await this.apiModel.getStoryById(this.storyId);
      if (storyData.ok) {
        this.view.populateStoryDetailAndInitialMap('', storyData.story);
      } else {
        this.view.populateStoryDetailError('Story not found');
      }
    } catch (error) {
      console.error('Error fetching story details:', error);
      this.view.populateStoryDetailError('Failed to fetch story details');
    }
  }
async postNewComment(data) {
    try {
      await StoryAPI.addComment(this.id, data); // Assuming this API method exists
      this.view.postNewCommentSuccessfully('Comment added successfully!');
    } catch (error) {
      this.view.postNewCommentFailed('Failed to add comment.');
      console.error(error);
    }
  }

  async getCommentsList() {
    try {
      const comments = await StoryAPI.getCommentsByStoryId(this.id); // Assuming this API method exists
      if (Array.isArray(comments)) {
        this.view.populateComments(comments);
      } else {
        this.view.populateComments([]);
      }
    } catch (error) {
      console.error('Error fetching comments:', error);
      this.view.populateComments([]);
    }
  }

  showSaveButton() {
    this.view.renderSaveButton();
  }

  showRemoveButton() {
    this.view.renderRemoveButton();
  }
}