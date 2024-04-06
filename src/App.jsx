import './App.css'

export default function App() {
  return (
    <main>
      React ⚛️ + Vite ⚡ + Replit
    </main>
  )
}

const root = "https://musicbrainz.org/ws/2/";

// Get artist, country, title, date, and Status
function get_music() {
  fetch(root + "artist/1?inc=name,sort-name,url-rels,area-rels");
  return result;
}
