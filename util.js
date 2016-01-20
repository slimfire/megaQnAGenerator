var fs = require('fs');

var util = function(){}

util.prototype.format = function(path, callback) {
	var set, questions = [], answers = [];

	//read file with utf8 encoding
	fs.readFile(path, 'utf8', function(error, data){
		if(error){
			console.log("error : ", error);		
		}

		// group each questions and answers
		set = data.split('\nQ.');

		//for each problemset split the questions from the answers and push into buckets
		set.forEach(function(problem, i){
			problem = set[i].split('\nC.');
			question = '\n' + (i + 1) + '. ' + problem[0];
			answer = '\n' + (i + 1 )+ '. ' + problem[1];
			if(i == 0){
				question = (i + 1) + problem[0].substr(1, problem[0].length);
			}
			questions.push(question);
			answers.push(answer);

			// if visited each problemset call back with the buckets
			if(i == set.length - 1){
				callback({questions : questions, answers : answers});
			}
		});
	});
};

module.exports = new util();