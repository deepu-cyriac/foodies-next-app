import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals() {
    //below line is just to simulate async function
    await new Promise((resolve) => setTimeout(resolve, 3000));
    // to throw db connectivity error
    // throw new Error('Loading meals failed');
    return db.prepare('SELECT * FROM meals').all();
}