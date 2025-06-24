// utils/db.js
import { openDB } from 'idb';

const DB_NAME = 'habiti-db';
const STORE_NAME = 'habits';

export async function initDB() {
  return await openDB(DB_NAME, 1, {
    upgrade(db) {
      db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
    }
  });
}

export async function addHabit(habit) {
  const db = await initDB();
  await db.add(STORE_NAME, habit);
}

export async function getHabits() {
  const db = await initDB();
  return await db.getAll(STORE_NAME);
}
