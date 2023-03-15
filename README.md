# weather-app
A react weather app for ECS522U GUI programming module

## Set-Up Guide
### Check latest versions node and npm are installed
```
node -v
npm -v
```

### Install Node and npm
```
sudo apt update
sudo apt install nodejs
sudo apt install npm
```

## Installation
**Clone repository:**
```
git clone --depth 1 https://github.com/Aqiil/weather-app.git weather-app
cd weather-app
```
When prompted for GitHub credentials, the password you input must be a personal access token that you generate at https://github.com/settings/tokens. Set any arbitrary name for your token and enure the 'repo - Full control of private repositories' permission is selected. Generate the token and paste it in the terminal when prompted for your GitHub password.

**Install dependencies:**
```
npm install
```

## Development Workflow
**Start a live-reload development server:**
```
npm run dev
```
App runs on **http://localhost:8080/** as default

**Generate a production build in ./build:**
```
npm run build
```

**Start local production server:**
```
npm start
```
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

**Start local test server:**
```
npm test
```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

**Build app:**
```
npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
