// requires our orm
// contains all methods to use to modify orm for use with database

const orm = require("../config/orm.js");

// Logic for calling ORM functions 

const burger = {
	all: function(cb){
		orm.all('burgers', function(res){
			cb(res);
		})
	},

	update: function(id,cb){
		orm.update('burgers', id, cb);
	},

	create: function(name, cb){
		orm.create('burgers', name, cb);
	}
}

module.exports = burger;