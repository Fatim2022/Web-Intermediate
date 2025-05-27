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
        <h2 class="report-detail__comments-form__title">Feedback </h2>
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
    </section>
  `;
}


  async afterRender() {
    this.#presenter = new StoryDetailPresenter(parseActivePathname().id, {
      view: this,
      apiModel: StoryAPI,
    });

    this.#setupForm();

    // Fetch and display the story detail
    await this.#presenter.showStoryDetail(); 
   
    await this.#presenter.getAllStories(); // Fetch all stories
  }

  showStoryDetailLoading() {
    const container = document.getElementById('report-detail-loading-container');
    container.innerHTML = generateLoaderAbsoluteTemplate();
  }

  hideStoryDetailLoading() {
    const container = document.getElementById('report-detail-loading-container');
    container.innerHTML = '';
  }

  showCommentsLoading() {
    const container = document.getElementById('comments-list-loading-container');
    container.innerHTML = generateLoaderAbsoluteTemplate();
  }

  hideCommentsLoading() {
    const container = document.getElementById('comments-list-loading-container');
    container.innerHTML = '';
  }

  showSubmitLoadingButton() {
    const submitButton = document.querySelector('#comments-list-form button');
    submitButton.setAttribute('disabled', 'true');
    submitButton.innerHTML = 'Mengirim...';
  }

  hideSubmitLoadingButton() {
    const submitButton = document.querySelector('#comments-list-form button');
    submitButton.removeAttribute('disabled');
    submitButton.innerHTML = 'Tanggapi';
  }

  showMapLoading() {
    const mapContainer = document.getElementById('map');
    mapContainer.innerHTML = generateLoaderAbsoluteTemplate();
  }

  hideMapLoading() {
    const mapContainer = document.getElementById('map');
    mapContainer.innerHTML = '';
  }

  showStoriesLoading() {
    const container = document.getElementById('stories-container');
    container.innerHTML = generateLoaderAbsoluteTemplate();
  }

  hideStoriesLoading() {
    const container = document.getElementById('stories-container');
    container.innerHTML = '';
  }

  async populateStoryDetailAndInitialMap(message, story) {
    // Ensure that story.location (latitude, longitude) is valid before accessing
    const latitude = story.lat;
    const longitude = story.lon;
  
    document.getElementById('report-detail').innerHTML = generateReportDetailTemplate({
      title: story.name, // 'name' is used for the title
      description: story.description, // 'description' is available in the story
      photoUrl: story.photoUrl, // Display the image
      createdAt: story.createdAt, // Display the created date
      lat: story.lat,
      lon: story.lon,
      reporterName: story.name
    });
  
    // Assuming you want to handle image carousel, here's how you might integrate it:
    createCarousel(document.getElementById('images'));
  
    // Call to initialize and display the map with the coordinates
    await this.#presenter.showStoryDetailMap();
    if (this.#map && latitude !== undefined && longitude !== undefined) {
      const storyCoordinate = [latitude, longitude];
      const markerOptions = { alt: story.name }; // Use 'name' for the marker alt text
      const popupOptions = { content: story.name }; // Popup content with story name
      this.#map.changeCamera(storyCoordinate); // Center the map on the story location
      this.#map.addMarker(storyCoordinate, markerOptions, popupOptions); // Add the marker
    } else {
      console.error('Invalid story location:', latitude, longitude);
    }
  
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
    this.#form.reset();
  }

  renderSaveButton() {
    document.getElementById('save-actions-container').innerHTML = generateSaveReportButtonTemplate();
    document.getElementById('report-detail-save').addEventListener('click', async () => {
      alert('Fitur simpan laporan akan segera hadir!');
    });
  }

  renderRemoveButton() {
    document.getElementById('save-actions-container').innerHTML = generateRemoveReportButtonTemplate();
    document.getElementById('report-detail-remove').addEventListener('click', async () => {
      alert('Fitur simpan laporan akan segera hadir!');
    });
  }

  addNotifyMeEventListener() {
    document.getElementById('report-detail-notify-me').addEventListener('click', () => {
      alert('Fitur notifikasi akan segera hadir!');
    });
  }

  // Tambahkan fungsi untuk menampilkan semua cerita
  populateStories(stories) {
    if (!stories || stories.length === 0) {
      console.error('No stories available!');
      return;
    }

    const html = stories.map(story => `
      <div class="story-item">
        <h3>${story.title}</h3>
        <p>${story.description}</p>
      </div>
    `).join('');

    const container = document.getElementById('stories-container');
    if (container) {
      container.innerHTML = html;
    } else {
      console.error('Stories container not found!');
    }
  }

  populateStoriesError(message) {
    alert(message); // Tampilkan pesan kesalahan
  }
}
