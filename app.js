const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const yargs = require('yargs')

yargs.command({
	command: 'weather',
	describe: 'Get city weather',
	builder: {
		city: {
			describe: 'City name',
			demandOption: true,
			type: 'string'
		}
	},
	handler(argv){
        geocode(argv.city, (error,{latitude,longitude,locations} = {}) => {
            if (error){
                console.log(error)
            } else{
                console.log(argv.city)
                forecast(latitude,longitude, (error,forecastData) => {
                    if(error){
                        console.log(error)
                    } else {
                        console.log(locations)
                        console.log(forecastData)
                    }
                })
            }
        })
	}
})

yargs.parse()