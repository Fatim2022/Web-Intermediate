import { openDB } from 'idb';
import { getAllStories } from './api';
import { removeStories } from '../utils/auth';
 
const DATABASE_NAME = 'citycare';
const DATABASE_VERSION = 1;
const OBJECT_STORE_NAME = 'saved-reports';
 
const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade: (database) => {
    database.createObjectStore(OBJECT_STORE_NAME, {
      keyPath: 'id',
    });
  },
});

const Database = {
  // CREATE - Menambah story baru ke database
  async putStories(story) {
    if (!Object.hasOwn(story, 'id')) {
      throw new Error('`id` is required to save.');
    }
    return (await dbPromise).put(OBJECT_STORE_NAME, story);
  },

  // READ - Mendapatkan semua stories dari database
  async getAllStories() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },

  // READ - Mendapatkan story berdasarkan ID
  async getStoryById(id) {
    if (!id) {
      throw new Error('`id` is required.');
    }
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },

  // DELETE - Menghapus story berdasarkan ID
  async removeStories(id) {
    if (!id) {
      throw new Error('`id` is required to delete.');
    }
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },

  // Utility method untuk mengecek apakah database tersedia
  async isDatabaseAvailable() {
    try {
      const db = await dbPromise;
      return !!db;
    } catch (error) {
      console.error('Database not available:', error);
      return false;
    }
  },

  // Method untuk menghitung jumlah stories tersimpan
  async getStoriesCount() {
    try {
      const stories = await this.getAllStories();
      return stories.length;
    } catch (error) {
      console.error('Error getting stories count:', error);
      return 0;
    }
  }
};

export default Database;