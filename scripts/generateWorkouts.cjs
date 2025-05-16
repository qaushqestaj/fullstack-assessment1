/**
 FOR USAGE
 
 This script generates mock workout data and saves it to `../src/data/workouts.json`.
 
 1. Make sure you have Node.js installed
 2. Locate to scripts/generateWorkouts.cjs and open terminal
 3. Run: node generateWorkouts.cjs
  
 Make sure that `src/data/` exists, or the script will throw an error.
 */

const fs = require('fs');
const path = require('path');

const BASE62 = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function encodeBase62(num) {
  let encoded = '';
  while (num > 0) {
    encoded = BASE62[num % 62] + encoded;
    num = Math.floor(num / 62);
  }
  return encoded || '0';
}

const NUM_WORKOUTS = 1000;
const CATEGORIES = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7'];
const DESCRIPTION = 'Basic';

const workouts = [];
const now = new Date();

for (let i = 0; i < NUM_WORKOUTS; i++) {
  const id = encodeBase62(i);
  const name = `W${i}`;
  const deltaDays = Math.floor(Math.random() * 365);
  const date = new Date(now.getTime() + deltaDays * 86400000);
  const shortDate = date.toISOString();
  const category = CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)];

  workouts.push({
    id,
    name,
    description: DESCRIPTION,
    startDate: shortDate,
    category,
  });
}

const outPath = path.resolve(__dirname, '../src/data/workouts.json');
fs.writeFileSync(outPath, JSON.stringify(workouts));
console.log(`Generated ${NUM_WORKOUTS} at ${outPath}`);
