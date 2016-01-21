var generator = require('./generator.js');
var inputDir = '../Notes/';
var file = 'ch1.odt';
var outputDir = '../QnAs/';

generator.generate(file, inputDir, outputDir);