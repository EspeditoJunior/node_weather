const request = require('request')

const geocode = (address, callback) => {
    const url = 'http://api.positionstack.com/v1/forward?access_key=2d8852b75a0ab81d3f4818bbc8c3807c&query='+encodeURIComponent(address)
    request({url, json: true}, (error,{body}) => {
        if(error) {
            callback('Geocode - Unable to connect to location services!',undefined)
        } else if(body.error){
            callback('Geocode - Unable to find geolocation',undefined)
        } else {
            callback(undefined,{
                latitude: body.data[0].latitude,
                longitude: body.data[0].longitude,
                location: body.data[0].name
            })
        } 
    })
}

module.exports = geocode