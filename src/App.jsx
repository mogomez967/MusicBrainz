import './App.css'

export default function App() {
  return (
    <main>
      React ⚛️ + Vite ⚡ + Replit
    </main>
  )
}

const API = "https://musicbrainz.org/ws/2/";
const Angelmaker = "artist/c5f8c1d7-9823-4b1a-bdfc-2995f847600b";

// Get artist, country
// async function get_music() {
//   const response = await fetch(API+Angelmaker+"?fmt=json");
//   const data = await response.json();

//   console.log(data);
//   console.log(data.name, data.area.name);
// }

// TODO: https://musicbrainz.org/artist/c5f8c1d7-9823-4b1a-bdfc-2995f847600b/details
// I am missing the "release country" parameter and I suspect I am missing a url parameter.

// List all albums using the release API. Get title, date, and Status
async function get_albums() {
  const response = await fetch(API+Angelmaker+"/releases/?fmt=json&inc=release-groups");
  const data = await response.json();
  
  for (let i = 0; i < data['release-groups'].length; i++) {
    console.log(data['release-groups'][i].title, data['release-groups'][i]['first-release-date'], data['release-groups'][i]['primary-type']);
  }
}

// get_music();
get_albums();