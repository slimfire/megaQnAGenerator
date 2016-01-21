var fs = require('fs');
var util = require('./util.js');

module.exports = {
	generate : function(file, inputDir, outputDir){
		util.format(inputDir + file , function(set){
			var fileName = file.substr(0, file.length - 4); 
			if (!fs.existsSync(outputDir + fileName)){
			    fs.mkdirSync(outputDir + fileName);
			}
			fs.writeFile(outputDir +  fileName + '/' + fileName + '_questions.odt', set.questions, 'utf8', function(err){
				if(err){
					console.log("error : ", err);
				}
				else{
					console.log('Questions generated !');
				}
			});
			fs.writeFile(outputDir + fileName + '/' + fileName + '_answers.odt', set.answers, 'utf8', function(err){
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