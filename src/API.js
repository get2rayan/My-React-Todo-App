const axios=require('axios').default     // equivalent to : import axios from "axios"
//const config=require('config').default

//console.log('Mongo db Url : ' + config.get('db.url'))
  
export default axios.create({
    //baseURL: "https://rayansexpresserver.azurewebsites.net/api"   //config.get('db.url'),
    baseURL: "http://localhost:4000/api"
    ,responseType: "json"
})