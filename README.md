# React
# Weather API Application
Welcome to the Weather API Application! This project is a simple yet powerful weather application that provides real-time weather data for cities all around the world. The application leverages a weather API to extract various weather attributes and presents them in a user-friendly interface.
Features
### Real-time Weather Data: 
Get up-to-date weather information for any city worldwide.
### Detailed Weather Attributes: 
Extracts and displays minimum temperature, maximum temperature, humidity, and weather descriptions.
### Dynamic Icons:
Uses Material UI icons to visually represent different weather conditions.
## Components
The application is structured into three main components:
### SearchBox
A user input field where users can enter the name of a city to retrieve weather information.
Provides suggestions as you type, making it easier to find the desired city.
### InfoBox
Displays the extracted weather data including min temperature, max temperature, humidity, and a description of the weather.
Uses Material UI icons to represent weather conditions dynamically, providing an intuitive and engaging user experience.
### WeatherApp

The main component that integrates the SearchBox and InfoBox components.
Manages the state and logic to fetch data from the weather API and pass it down to the InfoBox component.
## How It Works
### User Interaction: 
The user enters a city name in the SearchBox.
### Data Fetching:
The application sends a request to the weather API to retrieve weather data for the specified city.
### Data Display:
The retrieved weather data is passed to the InfoBox component, which displays the information along with relevant Material UI icons.
## Technologies Used
### React: 
For building the user interface and managing the application state.
### Material UI:
For providing a set of React components that implement Google's Material Design, including weather-related icons.
### Weather API: 
For fetching real-time weather data.

