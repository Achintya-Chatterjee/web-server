const request=require('request');
const geocode=(adress,csllback)=>{




    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/' + adress +'.json?access_token=pk.eyJ1Ijoic2FoZWItbm9kZSIsImEiOiJjazh5dnhja3UwNW14M2xvaDJmcmxmaW1mIn0.QVrn6-42EgluDYI3tA3h_g&limit=1'
    request({url, json: true }, (error,{body}) => {
       if(error){
        csllback('Unable to connect weather services!!',undefined)
       }else if (body.features.length===0 ){
        csllback('Unable to find location.Try another search!!',undefined)
       }else{
        csllback(undefined,{
          latitude:body.features[0].center[0],
          longitude:body.features[0].center[1],
          location:body.features[0].place_name
        })
       }
    })
 
  }
  
 module.exports=geocode;