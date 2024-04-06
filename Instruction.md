# MusicBrainz CSV File

Use the MusicBrainz API to create a CSV file listing the albums from a particular artist. Try to implement the project as a command line tool.

API Details: https://musicbrainz.org/doc/MusicBrainz_API

CSV File: https://en.wikipedia.org/wiki/Comma-separated_values

The resulting CSV file should have the following headers:

* Artist
* Country
* Title
* Date
* Status

Steps:

1) Search for the artist you are interested using the `artist` API.
2) List all albums using the `release` API.
3) Use the data returned from the APIs to construct the CSV file and save the CSV file to your local filesystem.

Bonus:

1) Implement some search capabilities with your command line tool so you can provide different artists/musicians to your tool from the command line.

Tips:

1) Read the documents
2) The API can return both XML and JSON
3) Feel free to ask questions in Slack
