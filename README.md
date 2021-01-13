# Weather_App
## Project Description 
> Displays a very detailed 5 day forecast for any location the user chooses

## Link to the API you plan to use
> http://api.openweathermap.org/data/2.5/forecast?q=brooklyn,ny,us&appid=c0e729c8b49ab07ba3d7d006687d5c89 (average weather for the day)
> http://api.openweathermap.org/data/2.5/forecast?q=brooklyn,ny,us&appid=c0e729c8b49ab07ba3d7d006687d5c89 (detailed weather report)

## Example data response you plan to use
```json
{
cod: "200",
message: 0,
cnt: 40,
list: [
{
dt: 1610560800,
main: {
temp: 278,
feels_like: 272.64,
temp_min: 277.36,
temp_max: 278,
pressure: 1017,
sea_level: 1017,
grnd_level: 1015,
humidity: 60,
temp_kf: 0.64
},
weather: [
{
id: 803,
main: "Clouds",
description: "broken clouds",
icon: "04d"
}
],
clouds: {
all: 69
},
wind: {
speed: 4.38,
deg: 238
},
visibility: 10000,
pop: 0,
sys: {
pod: "d"
},
dt_txt: "2021-01-13 18:00:00"
},
```

## Visual of your component hierarchy
> Copy and paste or drag and drop your images here.
![image](https://media.git.generalassemb.ly/user/31948/files/fb57e500-559d-11eb-8eef-0fd8f8335adc)

#### OPTIONAL Component Details
| Component | Description | State/Props
| --- | --- | :---: |
| App | This will make the initial data request and include React Router | State |
| Header | This will render the header include the nav | Props |
| WeatherList | This will render all of the weather data | Props |
| Weather| This will render the user's location's weather | Props |

## Wire Frames
[WeatherApp_Wireframe.pdf](https://git.generalassemb.ly/SEIR-1130/project-2/files/3728/WeatherApp_Wireframe.pdf)

## User Stories

### MVP Goals
As a User, I want the website to be easy to use
As a user, I want the UI/UX design to be great
As a user, I want the weather to be displayed for the specified location
As a user, I want more information about the location's weather other than the temperature
As a user, I want some type of visual for the location's weather

### Stretch Goals
As a user, I want a video explaining the location's weather
