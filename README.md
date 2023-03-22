# weather-app
This is a simple React weather app built as part of the ECS522U GUI Programming module. It allows users to search for the weather in a given location or across the world and displays the current temperature, weather conditions, and weather forecast for the near future.

## Set-Up Guide
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

4. Install the project dependencies by running the following command:
```
npm install
```

## Development Workflow

Once you've set up the app on your local machine, you can start a live-reload development server by running the following command:
```
npm run dev
```

This will start the development server and open the app in your default browser. Any changes you make to the code will be automatically reloaded in the browser.

To generate a production build of the app, run the following command:
```
npm run build
```

This will create a production-ready build of the app in the build directory.

To start a local production server and view the built app, run the following command:
```
npm start
```

This will launch the test runner in interactive watch mode, which will automatically re-run the tests whenever you make changes to the code.

## Further Information

If you have errors installing the project dependancies or when running the production server, you can install React Slick manually by running the following command:
```
npm install react-slick
```
For more information about the React Slick library used in this app, you can refer to the official documentation: https://react-slick.neostack.com/

## License
This project is licensed under the MIT License - see the [LICENSE](./LICENSE.txt) file for details.