const Dev = require('express');
const parseStringAsArray = require('../utils/parseStringAsArray');


module.exports = {
   async indexedDB(request,response){
      const {latitude,longitude ,techs } = request.query;
        const techsArray = parseStringAsArray(techs);
      const devs = await Dev.find({
         techs:{
           $in: techsArray,
         },
         location:{
          $near:{
             $geometry:{
                type:'Point',
                coodinates:[longitude,latitude],
             },
             $maxDistance: 10000,
          }
         },
      });

       return response.json({devs:[]});
   }
}