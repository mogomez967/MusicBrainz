import './App.css'

export default function App() {
  return (
    <main>
      React ⚛️ + Vite ⚡ + Replit
    </main>
  )
}

const API = "https://musicbrainz.org/ws/2/";
// This url below is the proper way to query "Angelmaker" and show albums in JSON
// http://musicbrainz.org/ws/2/release/?query=artist:Angelmaker&fmt=json
const artist_input = "Angelmaker";

async function get_artist() {
  const response = await fetch(API+'artist/?query=artist:' + artist_input + '&fmt=json');
  const data = await response.json();

  console.log(data.artists[0].name);
  return data.artists[0].name;
}

// List all albums using the release API. Get title, date, and Status
async function get_albums(artist) {
  const response = await fetch(API + 'release/?query=artist:' + artist + '&fmt=json');
  const data = await response.json();

  const csv = [];
  for (let i = 0; i < data.releases.length; i++) {
    csv.push(artist + ',', data.releases[i].country + ',', data.releases[i].title + ',', data.releases[i].date + ',', data.releases[i].status);
  }
  return csv;
}

async function make_csv(data) {
  const fs = require('fs');
  fs.writeFile('output.txt', data, (err) => {
    if (err) throw err;
  })
}

// (async () => { defines function // ..do things async })(call this function);
async function main() {
  const artist = await get_artist();
  const album_data = await get_albums(artist);
  console.log(album_data);

  make_csv(album_data);
}

main();