import { tursoRequest } from './src/logic/api/turso.js';

async function updateDb() {
  try {
    console.log('Adding is_active column...');
    await tursoRequest(`ALTER TABLE stok_berjalan ADD COLUMN is_active INTEGER DEFAULT 1;`);
    console.log('Column added successfully.');
  } catch (error: any) {
    if (error.message && error.message.includes('duplicate column name')) {
      console.log('Column is_active already exists.');
    } else {
      console.error('Error adding column:', error);
    }
  }
}

updateDb();
