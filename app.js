//0e8b46093fe87a2a2b2d1ce1fbcb22bb
const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=0e8b46093fe87a2a2b2d1ce1fbcb22bb&query=Sao%20Paulo&units=f'

console.log("teste1")

request({url: url, json: true}, (error, response) => {
    console.log(response.body.current.weather_descriptions[0]+". It is currently " +response.body.current.temperature+
        " degrees f out. It feels like  "+response.body.current.feelslike+" degrees f out")
})