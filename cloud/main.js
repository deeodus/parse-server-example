
Parse.Cloud.define("test", function(request, response) {
  var query = new Parse.Query("Cases");
  query.equalTo("code", request.params.code);
  query.find({ useMasterKey: true }).then((results) => {
      let sum = 0;
      for (let i = 0; i < results.length; ++i) {
        sum += results[i].get("price");
      }
      response.success(sum);
    })
    .catch(() =>  {
      response.error("movie lookup failed");
    });
});

