const request = require('request')

const forecast = (lat,lon,callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=0e8b46093fe87a2a2b2d1ce1fbcb22bb&query=\''+lat+','+lon+'\'&units=f'
    request({url, json: true}, (error, {body}) => {
        if(error) {
            callback("Forecast - Error connecting to weather api!",undefined)
        } else if(body.error){
            callback("Forecast - Unable to find location",undefined)
        } else {
            callback(undefined,{
                message: body.current.weather_descriptions[0]+". It is currently " +body.current.temperature+
                " degrees out. It feels like  "+body.current.feelslike+" degrees out"
            })
        }
    })
}

module.exports = forecast