Parse.Cloud.define("query", function(request, response) {
  const query = new Parse.Query("Cases");
  query.equalTo("caseNo", request.params.caseNo);
    .find()
    .then((results) => {
      //let sum = 0;
      //for (let i = 0; i < results.length; ++i) {
        //sum += results[i].get("stars");
      //}
      //response.success(sum / results.length);
      response.success(results);
    })
    .catch(() =>  {
      response.error("case lookup failed");
    });
});
