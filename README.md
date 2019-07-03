# Course Search

Desktop application built with React and Electron to find courses from multiple sources available to download in torrent form

![Screenshot](/screenshots/course_search_1.png)

## Usage

- `win`: Download compiled executable from releases tab
- `mac`: Follow below steps to compile binary

## Compile Steps

- Clone this repository
- cd into the directory and run `npm install`
- Run `npm run package` to compile react, copy files and then package your app
- A new `dist` folder will be created in the root of your project containing the executable files
NOTE: add `--mac` to the `postpackage` script besides `--win` if you are on a mac computer

## Development

- Run `npm start` to start the react development server
- After that, run `npm run start-electron` in a different terminal to start the electron app

## Project structure

- `electron/`: Code for the main Electron process
- `src/react/`: Code for the React renderer process
- `src/shared/`: Code shared between React and Electron
- `package.json`: Contains scripts for running the app in development, building it, and packaging it for production using electron-builder

## Contributing

Open a new PR to contribute

## License

MIT