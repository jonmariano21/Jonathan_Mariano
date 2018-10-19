var projects = require("../projects.json")
/*
 * GET home page.
 */

exports.view = function(req, res){
  // Here you should implement your random landing page rendering functionality
  //var random = Math.random();

  res.render("index_alternate", projects);
  /*
  if( random > 0.5 ){
	  //res.render("index", projects);
	  res.render("index_alternate", projects);
  }
  else{
  	res.render("index_alternate", projects);
  }
  */
};
