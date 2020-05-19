## Running the project

### `yarn start:dev`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
Open [http://localhost:3001](http://localhost:3001) to test the API calls.

Available paths:

Displays a card with the matching track ID
/tracks/{track_id} 

Displays a card with a matching artist name
/tracks/artist/{artist_name}

Displays all the available songs
/ 

Search implementation consists of a fuzzy search - approximate string matching using a use-fuse library that allows the user to customise the threshold of error for the typed in searches. 

### `yarn start`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance. It compiles Typescript on the backend and optimises it to a ready to be read by a browser set of JS files.

The build is minified and the filenames include the hashes.
Users app is ready to be deployed!

### `yarn start`

Future development:

1. Better error handling and error messages.
2. CSS styling of a main component.
3. After a short chat with a recruiter the major emphasis was given to the backend architecture, clean code, Typescript on the backend, best coding practices. The codebase was developed over one night and I am aware that despite of a production ready approach it will take some more time to polish it.
