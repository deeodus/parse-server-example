
Parse.Cloud.define("test", function( request, response ) {
  var query = new Parse.Query("Profiles");
  query.find({
    success: function(results) {
      //var sum = 0;
      //for ( var i = 0; i < results.length; ++i ) {
        //sum +=  results[i].get("end") - results[i].get("start") ;
      //}
      response.success( 'success' );
    },
    error: function() {
      response.error("trip lookup failed");
    }
  });
});


Parse.Cloud.define('test', function(request, response) {
  const query = new Parse.Query('Profiles');
  //query.equalTo('caseNo', request.params.caseNo);
    .find()
    .then((results) => {
      //let sum = 0;
      //for (let i = 0; i < results.length; ++i) {
        //sum += results[i].get("stars");
      //}
      //response.success(sum / results.length);
      response.success('Object ID' + results[0].get('objectId'));
    })
    .catch(() =>  {
      response.error('case lookup failed');
    });
});
