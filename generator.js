var fs = require('fs');
var util = require('./util.js');

module.exports = {
	generate : function(path){
		util.format(path, function(set){
			fs.writeFile(path + '_questions', set.questions.join(','), 'utf8', function(err){
				if(err){
					console.log("error : ", err);
				}
				else{
					console.log('questions generated !');
				}
			});
			fs.writeFile(path + '_questions', set.answers.join(','), 'utf8', function(err){
				if(err){
					console.log("error : ", err);
				}
				else{
					console.log('questions generated !');
				}
			});
		});
	}
}