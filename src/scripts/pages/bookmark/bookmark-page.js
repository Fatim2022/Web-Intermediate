import {
  generateLoaderAbsoluteTemplate,
  generateReportItemTemplate,
  generateReportsListEmptyTemplate,
  generateReportsListErrorTemplate,
} from '../../templates';
import BookmarkPresenter from './bookmark-presenter';
import Database from '../../data/database';
import Map from '../../utils/map';

export default class BookmarkPage {
  #presenter = null;
  #map = null;

  async render() {
    return `

      <section class="container">
        <h1 class="section-title">Daftar Laporan Tersimpan</h1>
        <div class="reports-list__container">
          <div id="reports-list"></div>
          <div id="reports-list-loading-container"></div>
        </div>
      </section>

      <section>
        <div class="reports-list__map__container">
          <div id="map" class="reports-list__map"></div>
          <div id="map-loading-container"></div>
        </div>
      </section>

    `;
  }

  async afterRender() {
    this.#presenter = new BookmarkPresenter({
      view: this,
      model: Database,
    });
    await this.#presenter.initialGalleryAndMap();
  }

  populateBookmarkedReports(message, reports) {
    console.log('populateBookmarkedReports called with:', reports);
    
    if (!reports || reports.length <= 0) {
      this.populateBookmarkedReportsListEmpty();
      return;
    }

    let html = '';
    
    reports.forEach((report) => {
      // Tambahkan marker ke peta jika tersedia
      if (this.#map && report.lat && report.lon) {
        const coordinate = [report.lat, report.lon];
        const markerOptions = { alt: report.name };
        const popupOptions = { content: report.name };
        this.#map.addMarker(coordinate, markerOptions, popupOptions);
      }

      // Generate HTML untuk setiap item dengan tombol hapus
      html += `
        <div class="report-item" data-id="${report.id}">
          <div class="report-item__content">
            ${report.photoUrl ? `<img src="${report.photoUrl}" alt="${report.name}" class="report-item__image">` : ''}
            <div class="report-item__info">
              <h3 class="report-item__title">${report.name || 'Tanpa Judul'}</h3>
              <p class="report-item__description">${report.description || 'Tidak ada deskripsi'}</p>
              <p class="report-item__date">${new Date(report.createdAt).toLocaleDateString('id-ID')}</p>
              ${report.lat && report.lon ? `<p class="report-item__location">Lat: ${report.lat}, Lon: ${report.lon}</p>` : ''}
            </div>
          </div>
          <div class="report-item__actions">
            <a href="#/detail/${report.id}" class="btn btn-primary">Lihat Detail</a>
            <button class="btn btn-danger delete-btn" data-id="${report.id}">Hapus</button>
          </div>
        </div>
      `;
    });

    document.getElementById('reports-list').innerHTML = `
      <div class="reports-list">${html}</div>
    `;

    // Tambahkan event listener untuk tombol hapus
    this.#attachDeleteEventListeners();
  }

  // Method terpisah untuk menangani event listener delete
  #attachDeleteEventListeners() {
    const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach((button) => {
      button.addEventListener('click', async (event) => {
        event.preventDefault();
        event.stopPropagation();
        
        const id = event.target.dataset.id;
        const reportItem = event.target.closest('.report-item');
        const reportTitle = reportItem.querySelector('.report-item__title').textContent;
        
        // Konfirmasi sebelum menghapus
        if (confirm(`Apakah Anda yakin ingin menghapus "${reportTitle}" dari bookmark?`)) {
          // Tampilkan loading state
          button.textContent = 'Menghapus...';
          button.disabled = true;
          
          await this.#presenter.deleteReport(id);
        }
      });
    });
  }

  populateBookmarkedReportsListEmpty() {
    document.getElementById('reports-list').innerHTML = `
      <div class="empty-state">
        <h3>Belum Ada Laporan Tersimpan</h3>
        <p>Anda belum menyimpan laporan apapun. Mulai jelajahi dan simpan laporan yang menarik!</p>
        <a href="#/home" class="btn btn-primary">Jelajahi Laporan</a>
      </div>
    `;
  }

  populateBookmarkedReportsError(message) {
    document.getElementById('reports-list').innerHTML = `
      <div class="error-state">
        <h3>Terjadi Kesalahan</h3>
        <p>${message}</p>
        <button class="btn btn-primary" onclick="location.reload()">Coba Lagi</button>
      </div>
    `;
  }

  showReportsListLoading() {
    document.getElementById('reports-list-loading-container').innerHTML =
      generateLoaderAbsoluteTemplate();
  }

  hideReportsListLoading() {
    document.getElementById('reports-list-loading-container').innerHTML = '';
  }

  async initialMap() {
    try {
      this.#map = await Map.build('#map', {
        zoom: 10,
        locate: true,
      });
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  }

  showMapLoading() {
    document.getElementById('map-loading-container').innerHTML = generateLoaderAbsoluteTemplate();
  }

  hideMapLoading() {
    document.getElementById('map-loading-container').innerHTML = '';
  }

  // Method untuk mendapatkan jumlah bookmark (opsional)
  async getBookmarkCount() {
    return await this.#presenter.getBookmarkedStoriesCount();
  }
}