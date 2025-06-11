import { createStory } from '../../data/api';

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
        console.log('Submitting form data...', formData); // Debug log
        
        const response = await this.#model.createStory(formData);
        
        // Validasi response structure
        console.log('API Response:', response); // Debug log
        
        if (!response) {
          throw new Error('Response is null or undefined');
        }
        
        // Tunggu notifikasi selesai dikirim (jika ada ID)
        if (response.data && response.data.id) {
          console.log('Sending notification for story ID:', response.data.id);
          await this.#notifyToAllUser(response.data.id);
        } else {
          console.warn('Response data or ID is missing, skipping notification:', response);
        }
        
        console.log('Story creation completed successfully');
        
        // Panggil success callback setelah semua operasi selesai
        this.#view.storeSuccessfully(
          response.message || 'Story created successfully'
        );
        
      } catch (error) {
        console.error('postNewReport: error:', error);
        // Pastikan error message ada
        const errorMessage = error.message || error.toString() || 'Failed to create story';
        this.#view.storeFailed(errorMessage);
      } finally {
        this.#view.hideSubmitLoadingButton();
      }
    }
  
    async #notifyToAllUser(reportId) {
      if (!reportId) {
        console.warn('No report ID provided for notification');
        return false;
      }
      
      try {
        console.log('Sending notification for report ID:', reportId);
        const response = await this.#model.sendReportToAllUserViaNotification(reportId);
        
        // Cek jika response adalah Response object dari fetch
        if (response && typeof response.ok !== 'undefined') {
          if (!response.ok) {
            console.error('#notifyToAllUser: HTTP error:', response.status, response.statusText);
            return false;
          }
          console.log('Notification sent successfully');
          return true;
        }
        
        // Jika response bukan Response object, anggap berhasil jika tidak error
        console.log('Notification completed:', response);
        return true;
        
      } catch (error) {
        console.error('#notifyToAllUser: error:', error);
        // Jangan throw error, karena notifikasi adalah operasi sekunder
        return false;
      }
    }
}