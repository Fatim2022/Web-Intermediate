// src/data/api-mapper.js
import Map from '../utils/map';

// Fungsi untuk memetakan data cerita (story)
export async function storyMapper(story) {
  return {
    ...story,
    location: {
      ...story.location,
      placeName: await Map.getPlaceNameByCoordinate(story.location.latitude, story.location.longitude),
    },
  };
}
