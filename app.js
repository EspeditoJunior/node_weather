const geocode = require('./utils/geocode')
/*const urlWeather= 'http://api.weatherstack.com/current?access_key=0e8b46093fe87a2a2b2d1ce1fbcb22bb&query=Sao%20Paulo'

request({url: urlWeather, json: true}, (error, response) => {
    if(error) {
        console.log("Error connecting to weather api!")
    } else if(response.body.error){
        console.log("Unable to find location")
    } else {
        console.log(response.body.current.weather_descriptions[0]+". It is currently " +response.body.current.temperature+
        " degrees out. It feels like  "+response.body.current.feelslike+" degrees out")
    }
})

const urlGeo = 'http://api.positionstack.com/v1/forward?access_key=2d8852b75a0ab81d3f4818bbc8c3807c&query=vila'

request({url: urlGeo, json: true}, (error,response) => {
    if(error) {
        console.log("Error connecting to geolocation api!")
    } else if(response.body.error){
        console.log("Unable to find geolocation")
    } else {
        console.log(response.body.data[0].latitude, response.body.data[0].longitude)
    } 
})*/

geocode('Sao Paulo', (error,data) => {
    console.log('Error', error)
    console.log('Data', data)
})