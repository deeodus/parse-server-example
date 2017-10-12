
Parse.Cloud.define("test", function(request, response) {
  var query = new Parse.Query("Cases");
  query.equalTo("code", request.params.code);
  query.find({ useMasterKey: true }).then((results) => {
      //let sum = 0;
      for (let i = 0; i < results.length; ++i) {
        //sum += results[i].get("price");
        
        let object = results[i];
        let value = results[i].get("price");
            
        object.set("price", value * 5);
        object.save(null, { useMasterKey: true });
      }
      
    response.success("successful change");
      //response.success(sum);
    })
    .catch(() =>  {
      response.error("movie lookup failed");
    });
});


Parse.Cloud.define("test2", function(request, response) {
  var query = new Parse.Query("Cases");
  query.equalTo("code", request.params.code);
  query.find({ useMasterKey: true }).then((results) => {
      //let sum = 0;
      for (let i = 0; i < results.length; ++i) {
        //sum += results[i].get("price");
        
        let object = results[i];
        let value = results[i].get("price");
            
        object.set("price", value * 100);
        object.save(null, { useMasterKey: true });
      }
      
    response.success("successful change");
      //response.success(sum);
    })
    .catch(() =>  {
      response.error("movie lookup failed");
    });
});

