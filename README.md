## Project Description 
> Displays weather for any location in the world

## Link to the API you plan to use
### Average Daily Weather
> http://api.openweathermap.org/data/2.5/weather?q=brooklyn,ny,us&appid={APIKey}
## Example data response you plan to use

### 1st API
```json
{
coord: {
lon: -73.9496,
lat: 40.6501
},
weather: [
{
id: 804,
main: "Clouds",
description: "overcast clouds",
icon: "04d"
}
],
base: "stations",
main: {
temp: 279.08,
feels_like: 272.26,
temp_min: 278.15,
temp_max: 280.15,
pressure: 1015,
humidity: 49
},
visibility: 10000,
wind: {
speed: 6.17,
deg: 260
},
clouds: {
all: 90
},
dt: 1610565988,
sys: {
type: 1,
id: 4610,
country: "US",
sunrise: 1610540285,
sunset: 1610574641
},
timezone: -18000,
id: 5110302,
name: "Brooklyn",
cod: 200
}
```

## Visual of your component hierarchy
![Componenet Hierarcy](/Component_Hierarchy.PNG)


#### OPTIONAL Component Details
| Component | Description | State/Props
| --- | --- | :---: |
| App | This will make the initial data request and include React Router | State |
| SearchForm | This will render all of the weather data from the API | Props |
| Weather| This will display the current weather | Props |
| WeatherDetails| This will display more weather details| Props |

## Wire Frames
[WeatherApp_Wireframe.pdf](https://git.generalassemb.ly/SEIR-1130/project-2/files/3728/WeatherApp_Wireframe.pdf)

## User Stories

### MVP Goals
* As a User, I want the website to be easy to use
* As a user, I want the UI/UX design to be great
* As a user, I want the weather to be displayed for the specified location
* As a user, I want more information about the location's weather other than the temperature
* As a user, I want some type of visual for the location's weather

### Stretch Goals
* As a user, I want a video explaining the location's weather
* As a user, I want a live forecast map
* As a user, I want a 5 day forcast


