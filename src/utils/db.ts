/**
 * Simple IndexedDB wrapper for storing high-quality clinical banners
 */

const DB_NAME = 'SriThirumalaClinicBannersDB';
const STORE_NAME = 'banners';

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = (event) => {
      resolve((event.target as IDBOpenDBRequest).result);
    };
    request.onerror = (event) => {
      reject((event.target as IDBOpenDBRequest).error);
    };
  });
}

export async function getStoredBanner(key: string): Promise<string | null> {
  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const transaction = db.transaction(STORE_NAME, 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.get(key);
      request.onsuccess = () => {
        resolve((request.result as string) || null);
      };
      request.onerror = () => {
        resolve(null);
      };
    });
  } catch (error) {
    console.error('Failed to get stored banner from IndexedDB', error);
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  }
}

export async function setStoredBanner(key: string, value: string): Promise<void> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.put(value, key);
      request.onsuccess = () => {
        resolve();
      };
      request.onerror = () => {
        reject(request.error);
      };
    });
  } catch (error) {
    console.error('Failed to set stored banner in IndexedDB', error);
    try {
      localStorage.setItem(key, value);
    } catch (err) {
      console.error('Fallback localStorage also failed', err);
      throw err;
    }
  }
}

export async function deleteStoredBanner(key: string): Promise<void> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.delete(key);
      request.onsuccess = () => {
        resolve();
      };
      request.onerror = () => {
        reject(request.error);
      };
    });
  } catch (error) {
    console.error('Failed to delete stored banner from IndexedDB', error);
    try {
      localStorage.removeItem(key);
    } catch {}
  }
}
