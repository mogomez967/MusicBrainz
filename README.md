# A Quick Representation of MusicBrainz API

### React.js Web Version
- This is a front-end version that prompts the user to input an artist
- If the input is valid, an API call wil be made to MusicBrainz API to generate all releases by an artist and display them in a table

### Node.js Script Version
- This is a script version that relies on Node.js
- From the command line, run:
```
node app.js <Any Artist Name>
```
- If this is successful, a csv file titled _output.txt_ will be created with the generated results. Otherwise, an error message will appear on the console
  
***Note: encase Artist names that have spaces with quotation marks:***
```
node app.js "Senses Fail"
```