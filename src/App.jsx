import './App.css'

export default function App() {
  return (
    <main>
      <div class="container">
        <input
          class="input has-text-centered is-rounded is-info"
          type="text"
          placeholder="Enter artist name"
        ></input>
      </div>

      <div class="container is-fluid">
        <button onClck={main} class="button is-rounded is-info">
          Search
        </button>
      </div>
    </main>
  )

}

const API = "https://musicbrainz.org/ws/2/";
const artist_input = "Angelmaker";

async function get_artist() {
  const response = await fetch(API+'artist/?query=artist:' + artist_input + '&fmt=json');
  const data = await response.json();

  if (data.artists && data.artists.length > 0) {
    console.log(data.artists[0].name);
    return data.artists[0].name;
  } else {
    console.log('Artist not found');
    return null;
  }
}

// List all albums using the release API. Get title, date, and Status
async function get_albums(artist) {
  const response = await fetch(API + 'release/?query=artist:' + artist + '&fmt=json');
  const data = await response.json();
  const csv = data.releases.map(release => [artist, release.country, release.title, release.date, release.status].join(','));
  return csv;
}

async function main() {
  const artist = await get_artist();
  const album_data = await get_albums(artist);
  console.log(album_data);
}

main();