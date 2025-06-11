import { reportMapper } from '../../data/api-mapper';

export default class BookmarkPresenter {
  #view;
  #model;

  constructor({ view, model }) {
    this.#view = view;
    this.#model = model;
  }

  async showReportsListMap() {
    this.#view.showMapLoading();
    try {
      await this.#view.initialMap();
    } catch (error) {
      console.error('showReportsListMap: error:', error);
    } finally {
      this.#view.hideMapLoading();
    }
  }

  async initialGalleryAndMap() {
    this.#view.showReportsListLoading();

    try {
      await this.showReportsListMap();
      
      // Menggunakan method yang benar dari database
      const listOfStories = await this.#model.getAllStories();
      
      if (!listOfStories || listOfStories.length === 0) {
        const message = 'Tidak ada laporan tersimpan.';
        this.#view.populateBookmarkedReports(message, []);
        return;
      }

      // Map data stories menggunakan reportMapper jika diperlukan
      const stories = await Promise.all(listOfStories.map(story => {
        // Pastikan data story memiliki format yang benar
        return {
          id: story.id,
          name: story.name || story.title,
          description: story.description,
          photoUrl: story.photoUrl,
          createdAt: story.createdAt,
          lat: story.lat,
          lon: story.lon
        };
      }));

      const message = 'Berhasil mendapatkan daftar laporan tersimpan.';
      this.#view.populateBookmarkedReports(message, stories);
    } catch (error) {
      console.error('initialGalleryAndMap: error:', error);
      this.#view.populateBookmarkedReportsError(error.message);
    } finally {
      this.#view.hideReportsListLoading();
    }
  }

  // Method untuk menghapus story dari bookmark
  async deleteReport(id) {
    if (!id) {
      console.error('deleteReport: ID is required');
      return;
    }

    try {
      await this.#model.removeStories(id);
      
      // Tampilkan pesan sukses
      console.log('Story berhasil dihapus dari bookmark');
      
      // Refresh daftar bookmark
      await this.initialGalleryAndMap();
    } catch (error) {
      console.error('deleteReport error:', error);
      alert('Gagal menghapus story dari bookmark: ' + error.message);
    }
  }

  // Method untuk mendapatkan jumlah stories tersimpan
  async getBookmarkedStoriesCount() {
    try {
      return await this.#model.getStoriesCount();
    } catch (error) {
      console.error('Error getting bookmarked stories count:', error);
      return 0;
    }
  }
}