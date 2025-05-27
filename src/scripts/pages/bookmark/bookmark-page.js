export default class BookmarkPage {
    async render() {
      return '';
    }
  
    async afterRender() {
      alert('Halaman ini sedang dalam pengembangan');
  
      location.hash = '/';
    }
  }
  