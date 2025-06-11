import {
  generateLoaderAbsoluteTemplate,
  generateReportItemTemplate,
  generateReportsListEmptyTemplate,
  generateReportsListErrorTemplate,
} from '../../templates';
import HomePresenter from './home-presenter';
import Map from '../../utils/map';
import * as storyAPI from '../../data/api';

export default class HomePage {
  #presenter = null;
  #map = null;

  async render() {
  return `
    <section class="photo-section">
      <img src="images/beranda.jpg" alt="Foto DBS" class="dbs-photo"/>
    </section>

    <section class="container">
      <h2 class="section-title">Story List</h2>
        <div class="reports-list__container">
         <div class="reports-list" id="reports-list"></div>
        <div id="reports-list-loading-container"></div>
      </div>
    </section>


    <section>
    <h2 class="section-title">Maps List</h2>
      <div class="reports-list__map__container">
        <div id="map" class="reports-list__map"></div>
        <div id="map-loading-container"></div>
      </div>
    </section>
  `;
}


  async afterRender() {
    this.#presenter = new HomePresenter({
      view: this,
      model: storyAPI,
    });

    await this.#presenter.initialGalleryAndMap();
  }

  populateReportsList(message, reports) {
    // Ensure reports is defined and has data
    if (!reports || reports.length <= 0) {
      this.populateReportsListEmpty();
      return;
    }
  
    const html = reports.reduce((accumulator, report) => {
      // Check if lat and lon are valid before adding the marker
      if (this.#map && report.lat !== undefined && report.lon !== undefined && report.lat !== null && report.lon !== null) {
        const coordinate = [report.lat, report.lon];
        const markerOptions = { alt: report.name };
        const popupOptions = { content: report.name };
        this.#map.addMarker(coordinate, markerOptions, popupOptions);
      } else {
        console.warn(`Invalid coordinates for report ID: ${report.id}`);
      }
  
      return accumulator.concat(
        generateReportItemTemplate({
          id: report.id,
          title: report.name,
          description: report.description,
          photoUrl: report.photoUrl,
          lat: report.lat,
          lon: report.lon,
          reporterName: report.name,
          createdAt: report.createdAt,
        })
      );
    }, '');
  
  document.getElementById('reports-list').innerHTML = html;
}
  

  populateReportsListEmpty() {
    document.getElementById('reports-list').innerHTML = generateReportsListEmptyTemplate();
  }

  populateReportsListError(message) {
    document.getElementById('reports-list').innerHTML = generateReportsListErrorTemplate(message);
  }

  async initialMap() {
    this.#map = await Map.build('#map', {
      zoom: 10,
      locate: true,
    });
  }

  showMapLoading() {
    document.getElementById('map-loading-container').innerHTML = generateLoaderAbsoluteTemplate();
  }

  hideMapLoading() {
    document.getElementById('map-loading-container').innerHTML = '';
  }

  showLoading() {
    document.getElementById('reports-list-loading-container').innerHTML =
      generateLoaderAbsoluteTemplate();
  }

  hideLoading() {
    document.getElementById('reports-list-loading-container').innerHTML = '';
  }
}
