'use strict';

exports.vehicleGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = {
  "color" : "Red",
  "vin" : "kevincame2323",
  "display_name" : "Kevin's Model S",
  "vehicle_id" : "jajaewfw312"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

