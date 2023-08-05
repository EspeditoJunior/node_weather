const request = require('request')

const geocode = (address, callback) => {
    const url = 'http://api.positionstack.com/v1/forward?access_key=2d8852b75a0ab81d3f4818bbc8c3807c&query='+encodeURIComponent(address)
    request({url: url, json: true}, (error,response) => {
        if(error) {
            callback('Unable to connect to location services!',undefined)
        } else if(response.body.error){
            callback('Unable to find geolocation',undefined)
        } else {
            callback(undefined,{
                latitude: response.body.data[0].latitude,
                longitude: response.body.data[0].longitude,
                location: response.body.data[0].name
            })
        } 
    })
}

module.exports = geocode