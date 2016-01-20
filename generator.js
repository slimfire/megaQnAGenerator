var fs = require('fs');
var util = require('./util.js');

module.exports = {
	generate : function(path){
		util.format(path, function(set){
			fs.writeFile(path.substr(0, path.length-4) + '_questions.odt', set.questions.join(','), 'utf8', function(err){
				if(err){
					console.log("error : ", err);
				}
				else{
					console.log('Questions generated !');
				}
			});
			fs.writeFile(path.substr(0, path.length-4) + '_answers.odt', set.answers.join(','), 'utf8', function(err){
				if(err){
					console.log("error : ", err);
				}
				else{
					console.log('Answers generated !');
				}
			});
		});
	}
}