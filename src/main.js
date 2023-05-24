import openMeteoConfig from './config/service-config.json' assert {type: 'json'};
import OpenMeteoService from './service/OpenMeteoService.js';
//functions
function getISODateStr(date) {
    return date.toISOString().substring(0, 10)
}
function getEndDate(startDateStr, days) {
    const date = new Date(startDateStr);
    const endDate = new Date(date.setDate(date.getDate() + days));
    return getISODateStr(endDate);
}

 const fromFormData ={city: 'Rehovot',
  startDate: getISODateStr(new Date()),
days: 0, hourFrom: 20, hourTo: 21};
//objects
const openMeteoService = new OpenMeteoService(openMeteoConfig.baseUrl);
const latLong = openMeteoConfig.cities[fromFormData.city];
const {lat, long} = latLong;
const {startDate, days, hourFrom, hourTo} = fromFormData
openMeteoService.getTemperatures(lat, long,startDate, getEndDate(startDate, days),
 hourFrom, hourTo).then(data => console.log(data))

 

 
 

