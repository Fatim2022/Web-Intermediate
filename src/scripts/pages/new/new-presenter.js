import { createStory } from '../../data/api';  // Import fungsi createStory dari api.js

export default class NewPresenter {
    #view;
    #model;
  
    constructor({ view, model }) {
      this.#view = view;
      this.#model = model;
    }
  
    async showNewFormMap() {
      this.#view.showMapLoading();
      try {
        await this.#view.initialMap();
      } catch (error) {
        console.error('showNewFormMap: error:', error);
      } finally {
        this.#view.hideMapLoading();
      }
    }
  
    async postNewReport(formData) {
      this.#view.showSubmitLoadingButton();
      try {
        const response = await this.#model.createStory(formData);  // Ambil response dari createStory
        this.#view.storeSuccessfully(response.message);
      } catch (error) {
        console.error('postNewReport: error:', error);
        this.#view.storeFailed(error.message);
      } finally {
        this.#view.hideSubmitLoadingButton();
      }
    }
    
  }
  