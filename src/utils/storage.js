import { initialMahasiswa } from '../data/sampleData';

const STORAGE_KEY = 'stti_mahasiswa_data';

export function getStoredMahasiswa() {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialMahasiswa));
    return initialMahasiswa;
  }

  try {
    return JSON.parse(data);
  } catch (error) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialMahasiswa));
    return initialMahasiswa;
  }
}

export function saveMahasiswa(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function resetMahasiswa() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(initialMahasiswa));
  return initialMahasiswa;
}
