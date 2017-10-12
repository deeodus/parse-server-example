
Parse.Cloud.define("test", function( request, response ) {
  var query = new Parse.Query("Profiles");
  query.find({
    success: function(results) {
      var sum = 0;
      for ( var i = 0; i < results.length; ++i ) {
        sum +=  results[i].get("end") - results[i].get("start") ;
      }
      response.success( sum + 'test test' );
    },
    error: function() {
      response.error("trip lookup failed");
    }
  });
});
