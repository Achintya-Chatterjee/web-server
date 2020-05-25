const request = require('request');
const forecast = (latitude,longitude,callnck) =>{
    const url='https://api.darksky.net/forecast/9af17417fc5a41a7cb8156609b1e3ab6/' + latitude +',' + longitude
    request({url,json:true},(error,{body})=>{
        if(error){
            callnck('Unable to connect Weather services!!!',undefined)
        }else if(body.error){
            callnck('Unable to find location.Try another Search',undefined)
        }else{
            callnck(undefined, body.daily.data[0].summary +" It is currently " + body.currently.temperature + " degrees out.!!! There is a " + body.currently.precipProbability + "% chance of Rain.!!!")
        }
    })
}
module.exports = forecast