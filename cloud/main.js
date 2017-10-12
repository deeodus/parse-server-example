
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hello this is Dee and + req.params.name');
});
