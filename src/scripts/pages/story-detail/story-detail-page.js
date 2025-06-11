import { 
  generateCommentsListEmptyTemplate, 
  generateCommentsListErrorTemplate, 
  generateLoaderAbsoluteTemplate, 
  generateRemoveReportButtonTemplate, 
  generateReportCommentItemTemplate, 
  generateReportDetailErrorTemplate, 
  generateReportDetailTemplate, 
  generateSaveReportButtonTemplate 
} from '../../templates';

import { createCarousel } from '../../utils';
import StoryDetailPresenter from './story-detail-presenter';  
import { parseActivePathname } from '../../routes/url-parser';
import Map from '../../utils/map';
import * as StoryAPI from '../../data/api';
import Database from '../../data/database';

export default class StoryDetailPage {
  #presenter = null;
  #form = null;
  #map = null;

  async render() {
    return `
      <section class="container">
        <div class="report-detail__card card">
          <div id="report-detail" class="report-detail"></div>
          <div id="report-detail-loading-container" class="loading-container"></div>
        </div>

        <div class="report-detail__comments card">
          <h2 class="report-detail__comments-form__title">Feedback</h2>
          <form id="comments-list-form" class="report-detail__comments-form">
            <textarea name="body" placeholder="Give feedback on story" rows="4"></textarea>
            <div class="submit-button-container">
              <button class="btn" type="submit">Submit</button>
            </div>
          </form>
          <hr>
          <div class="report-detail__comments-list">
            <div id="report-detail-comments-list"></div>
            <div id="comments-list-loading-container" class="loading-container"></div>
          </div>
        </div>
    `;
  }

  async afterRender() {
    this.#presenter = new StoryDetailPresenter(parseActivePathname().id, {
      view: this,
      apiModel: StoryAPI,
      dbModel: Database,
    });

    this.#setupForm();

    this.#presenter.showStoryDetail(); 
    this.#presenter.getAllStories();
  }

  showStoryDetailLoading() {
    const container = document.getElementById('report-detail-loading-container');
    if (container) container.innerHTML = generateLoaderAbsoluteTemplate();
  }

  hideStoryDetailLoading() {
    const container = document.getElementById('report-detail-loading-container');
    if (container) container.innerHTML = '';
  }

  showCommentsLoading() {
    const container = document.getElementById('comments-list-loading-container');
    if (container) container.innerHTML = generateLoaderAbsoluteTemplate();
  }

  hideCommentsLoading() {
    const container = document.getElementById('comments-list-loading-container');
    if (container) container.innerHTML = '';
  }

  showSubmitLoadingButton() {
    const submitButton = document.querySelector('#comments-list-form button');
    if (submitButton) {
      submitButton.setAttribute('disabled', 'true');
      submitButton.innerHTML = 'Mengirim...';
    }
  }

  hideSubmitLoadingButton() {
    const submitButton = document.querySelector('#comments-list-form button');
    if (submitButton) {
      submitButton.removeAttribute('disabled');
      submitButton.innerHTML = 'Submit';
    }
  }

  showMapLoading() {
    const mapContainer = document.getElementById('map');
    if (mapContainer) mapContainer.innerHTML = generateLoaderAbsoluteTemplate();
  }

  hideMapLoading() {
    const mapContainer = document.getElementById('map');
    if (mapContainer) mapContainer.innerHTML = '';
  }

  showStoriesLoading() {
    const container = document.getElementById('stories-container');
    if (container) container.innerHTML = generateLoaderAbsoluteTemplate();
  }

  hideStoriesLoading() {
    const container = document.getElementById('stories-container');
    if (container) container.innerHTML = '';
  }

  async populateStoryDetailAndInitialMap(message, story) {
    const latitude = story.lat;
    const longitude = story.lon;

    // Generate template dengan data story
    document.getElementById('report-detail').innerHTML = generateReportDetailTemplate({
      title: story.name,
      description: story.description,
      photoUrl: story.photoUrl,
      createdAt: story.createdAt,
      lat: story.lat,
      lon: story.lon,
      reporterName: story.name
    });

    // Initialize carousel jika ada
    const imagesElement = document.getElementById('images');
    if (imagesElement) {
      createCarousel(imagesElement);
    }

    // Initialize map dan marker
    await this.#presenter.showStoryDetailMap();
    if (this.#map && latitude !== undefined && longitude !== undefined) {
      const storyCoordinate = [latitude, longitude];
      const markerOptions = { alt: story.name };
      const popupOptions = { content: story.name };
      this.#map.changeCamera(storyCoordinate);
      this.#map.addMarker(storyCoordinate, markerOptions, popupOptions);
    } else {
      console.error('Invalid story location:', latitude, longitude);
    }

    // Tampilkan tombol save/remove
    this.#presenter.showSaveButton();
    this.addNotifyMeEventListener();
  }

  populateStoryDetailError(message) {
    document.getElementById('report-detail').innerHTML = generateReportDetailErrorTemplate(message);
  }

  async initialMap() {
    this.#map = await Map.build('#map', { zoom: 15 });
  }

  #setupForm() {
    this.#form = document.getElementById('comments-list-form');
    if (!this.#form) return;
    this.#form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const data = {
        body: this.#form.elements.namedItem('body').value,
      };
      await this.#presenter.postNewComment(data);
    });
  }

  postNewCommentSuccessfully(message) {
    console.log(message);
    this.#presenter.getCommentsList();
    this.clearForm();
  }

  postNewCommentFailed(message) {
    alert(message);
  }

  clearForm() {
    if (this.#form) this.#form.reset();
  }

  // Method untuk render tombol simpan
  renderSaveButton() {
    const container = document.getElementById('save-actions-container');
    if (!container) {
      console.error('save-actions-container not found');
      return;
    }

    container.innerHTML = generateSaveReportButtonTemplate();
    
    const saveButton = document.getElementById('report-detail-save');
    if (saveButton) {
      saveButton.addEventListener('click', async () => {
        // Tampilkan loading state
        saveButton.textContent = 'Menyimpan...';
        saveButton.disabled = true;
        
        try {
          await this.#presenter.saveStories();
          await this.#presenter.showSaveButton();
        } finally {
          // Reset button state jika masih ada
          if (saveButton) {
            saveButton.textContent = 'Simpan Laporan';
            saveButton.disabled = false;
          }
        }
      });
    }
  }

  saveToBookmarkSuccessfully(message) {
    console.log(message);
    alert(message); // Tampilkan notifikasi sukses
  }

  saveToBookmarkFailed(message) {
    alert(message);
  }

  // Method untuk render tombol hapus
  renderRemoveButton() {
    const container = document.getElementById('save-actions-container');
    if (!container) {
      console.error('save-actions-container not found');
      return;
    }

    container.innerHTML = generateRemoveReportButtonTemplate();
    
    const removeButton = document.getElementById('report-detail-remove');
    if (removeButton) {
      removeButton.addEventListener('click', async () => {
        // Konfirmasi sebelum menghapus
        if (confirm('Apakah Anda yakin ingin menghapus cerita ini dari bookmark?')) {
          // Tampilkan loading state
          removeButton.textContent = 'Menghapus...';
          removeButton.disabled = true;
          
          try {
            await this.#presenter.removeStories();
            await this.#presenter.showSaveButton();
          } finally {
            // Reset button state jika masih ada
            if (removeButton) {
              removeButton.textContent = 'Buang Laporan';
              removeButton.disabled = false;
            }
          }
        }
      });
    }
  }

  removeFromBookmarkSuccessfully(message) {
    console.log(message);
    alert(message); // Tampilkan notifikasi sukses
  }

  removeFromBookmarkFailed(message) {
    alert(message);
  }

  addNotifyMeEventListener() {
    const button = document.getElementById('report-detail-notify-me');
    if (button) {
      button.addEventListener('click', () => {
        alert('Fitur notifikasi akan segera hadir!');
        this.#presenter.notifyMe();
      });
    }
  }

  populateStories(stories) {
    if (!stories || stories.length === 0) {
      console.log('No additional stories to display');
      return;
    }

    const html = stories.map(story => `
      <div class="story-item">
        <h3>${story.name || story.title}</h3>
        <p>${story.description}</p>
        <a href="#/detail/${story.id}" class="btn btn-sm">Lihat Detail</a>
      </div>
    `).join('');

    const container = document.getElementById('stories-container');
    if (container) {
      container.innerHTML = html;
    }
  }

  populateStoriesError(message) {
    const container = document.getElementById('stories-container');
    if (container) {
      container.innerHTML = `<p class="error-message">${message}</p>`;
    }
  }

  populateCommentsList(comments) {
    const container = document.getElementById('report-detail-comments-list');
    if (!container) return;

    if (!comments || comments.length === 0) {
      container.innerHTML = generateCommentsListEmptyTemplate();
      return;
    }

    const html = comments.map(comment => 
      generateReportCommentItemTemplate(comment)
    ).join('');

    container.innerHTML = html;
  }

  populateCommentsListError(message) {
    const container = document.getElementById('report-detail-comments-list');
    if (container) {
      container.innerHTML = generateCommentsListErrorTemplate(message);
    }
  }
}