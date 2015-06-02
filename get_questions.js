/* jshint worker: true */
'use strict';

importScripts("questions-worker.js");

onmessage = function(e) {

 	var quizId = e.data.config.quizID;
 	var puid = e.data.config.puid.puid;
 	var webServiceUrl = e.data.config.webServiceURL;
 	var url = webServiceUrl + quizId + "/" + puid;
  var quizquestions = e.data.config.quizquestions;

 	loadConfig(e.data);

  loadAnnotations(quizquestions);
}





