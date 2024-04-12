import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

//content accepted and added to the dB
export const putDb = async (content) => {
  console.log ('PUT to dB');
  const jateDB = await openDB('jate', 1);
	const tx = jateDB.transaction('jate', 'readwrite');
	const store = tx.objectStore('jate');
	const request = store.put({ id: 1, value: content });
	const result = await request;
	console.log('data saved to the dB!!', result);
  console.error('data not found in the dB');
}
// TODO: Add logic for a method that gets all the content from the database
export const getDb = async (e) => console.error('getDb not implemented');

initdb();
