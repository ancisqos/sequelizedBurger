// create object with all sorts of methods in it
// all the different things we can do with data

const connection = require("./connection.js");

// "OH CRUD."

const orm = {

	//all data from database
	all: function(tableInput, cb){
		connection.query('SELECT * FROM '+tableInput+';', function(err, result){
			if(err) throw err;
			cb(result)
		})
	},

	update: function(tableInput, condition, cb){
		connection.query('UPDATE '+tableInput+' SET devoured=true WHERE id='+condition+';', function(err,result){
			if(err)throw err;
			cb(result);
		})
	},

	create: function(tableInput,val,cb){
		connection.query('INSERT INTO '+tableInput+" (burger_name) VALUES ('"+val+"');", function(err, result){
				if(err)throw err;
				cb(result);
		})
	}
}

module.exports = orm;


	// selectAll ()
	// // orm.all
	// insertOne ()
	// // orm.create
	// updateOne ()
	// // orm.update