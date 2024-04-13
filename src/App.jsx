import './App.css'

export default function App() {
  return (
    <main>
      React ⚛️ + Vite ⚡ + Replit
    </main>
  )
}

const root = "https://musicbrainz.org/ws/2/";
const Angelmaker = "artist/c5f8c1d7-9823-4b1a-bdfc-2995f847600b"

// Get artist, country, title, date, and Status
async function get_music() {
  const response = await fetch("https://musicbrainz.org/ws/2/artist/c5f8c1d7-9823-4b1a-bdfc-2995f847600b?fmt=json");
  const data = await response.json();
  console.log(data);
}

get_music();

// List all albums using the release API.
async function get_albums() {
  const response = await fetch("https://musicbrainz.org/ws/2/artist/c5f8c1d7-9823-4b1a-bdfc-2995f847600b/releases/?fmt=json&inc=artist-credits+recordings");
  const data = await response.json();
  console.log(data);
}

get_albums();