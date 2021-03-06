
Parse.Cloud.define("findCases", function(request, response) {
  
  var query = new Parse.Query(Parse.User);
  query.equalTo("objectId", request.params.objectID);  // Find user with this ID
  query.find({
    
    success: function(patients) {
      
      let user = patients[0];
      
      var query = new Parse.Query("Cases");
    query.equalTo("username", request.params.username);
    query.find({ useMasterKey: true }).then((results) => {
      //let sum = 0;
    let newUsername = request.params.newUsername;
      for (let i = 0; i < results.length; ++i) {
        //sum += results[i].get("price");
        
        let object = results[i];           
        object.set("username",newUsername);
        
        var acl = new Parse.ACL();
        acl.setRoleWriteAccess("Specialists", true);
        acl.setRoleReadAccess("Specialists", true);
        acl.setReadAccess(user, true);
        acl.setWriteAccess(user, true);
        object.setACL(acl);
        
        object.save(null, { useMasterKey: true });
      }
    
      response.success("success:" + results.length);
      //response.success(sum);
    })
    .catch(() =>  {
      response.error("fail");
    });
      
      //=======
  }
    
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

