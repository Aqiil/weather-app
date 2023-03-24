# weather-app
This is a simple React weather app built as part of the ECS522U GUI Programming module. It allows users to search for the weather in a given location or across the world and displays the current temperature, weather conditions, and weather forecast for the near future.

## Set-Up Guide
### Cloning the repository
To set up the app on your local machine, follow the instructions below:

1. Check that you have the latest version of Node.js and npm installed. You can do this by running the following commands in your terminal:
```
node -v
npm -v
```
2. Clone the repository to your local machine using the following command:
```
git clone --depth 1 https://github.com/Aqiil/weather-app.git weather-app
```
This will create a new directory called "weather-app" in your current working directory.

3. Navigate into the "weather-app" directory:
```
cd weather-app
```
### Setting up the project locally
Once you install and navigate to the project folder on your machine, follow the instructions below:
1. Install the project dependencies by running the following command:
```
npm install
```
2. Configure config.js with your own student or developer API key
```
// src/config.js
API_KEY: {YOUR_API-KEY}
```

## Development Workflow

Once you've set up the app on your local machine, you can generate a production build of the app, by running the following command:
```
npm run build
```

This will create a production-ready build of the app in the build directory.

To start a local production server and view the built app, run the following command:
```
npm start
```

## Further Information

### Installation issues

If you have errors installing the project dependancies or when running the production server, you can install React Slick manually by running the following command:
```
npm install react-slick
```
For more information about the React Slick library used in this app, you can refer to the official documentation: https://react-slick.neostack.com/

### Bugs
Please note that the Weather App has been optimized for use with the Google Chrome browser. While the app should work in other browsers, there is a known issue with the font weight of the h3 tag when running the app in other browsers or in incognito mode. We recommend using Chrome for the best experience.

Please note that you may need to zoom out on your browser if you are running this app on a laptop.

## License
This project is licensed under the MIT License - see the [LICENSE](./LICENSE.txt) file for details.
