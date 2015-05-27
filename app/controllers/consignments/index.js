import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		goToLink: function (consignment) {
			this.transitionToRoute('codes', consignment); 
		},
		download: function (link, req_type) {
			// Ember.$.ajax('http://admin.ingida.ru:80/api'+link, {
			// 	httpMethod: "GET",
			// 	headers: {
			// 		"Authorization": "Token " + this.get('session.secure.token')
			// 	}
			// }).done (function (reply){
			// 	console.log(reply.length);
				// var blob = new Blob([reply], {type: "application/zip"});
				// window.saveAs (blob, "1.zip");
			// });

			// 	window.location = "data:application/download;base64,"+btoa(toBinaryString(reply));
			// });
			// var xhr = new XMLHttpRequest();
			// xhr.open( "GET", "http://admin.ingida.ru:80/api"+link);
			// xhr.setRequestHeader("Authorization", "Token " + this.get('session.secure.token'));

			// xhr.addEventListener( "load", function(){
			// 	var data = toBinaryString(this.responseText);
			// 	var blob = new Blob([btoa(data)], {type: "application/zip"});
			// 	window.saveAs (blob, "1.zip");
			// }, false);

			// xhr.addEventListener( "load", function(){
			// 	console.log(this.responseText.length);
			// 	var data = toBinaryString(this.responseText);
			// 	data = "data:application/"+req_type+";base64,"+btoa(data);
			// 	document.location = data;
			// }, false);

			// xhr.overrideMimeType( "application/octet-stream; charset=x-user-defined;" );
			// xhr.send(null);

		}
	}
});

// function toBinaryString(data) {
// 	var ret = [];
// 	var len = data.length;
// 	var byte;
// 	for (var i = 0; i < len; i++) { 
// 		byte=( data.charCodeAt(i) & 0xFF )>>> 0;
// 		ret.push( String.fromCharCode(byte) );
// 	}

// 	return ret.join('');
// }

// done (function (response, status, xhr) {

// 					var filename
// 					// if (req_type == 'zip')	{
// 					// 	var disposition = xhr.getResponseHeader('Content-Disposition');
// 					// 	if (disposition && disposition.indexOf('attachment') !== -1) {
// 					// 		var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
// 					// 		var matches = filenameRegex.exec(disposition);
// 					// 		if (matches != null && matches[1]) filename = matches[1].replace(/['"]/g, '');
// 					// 	}
// 					// }
// 					if (req_type == 'zip')	{
// 						var type = xhr.getResponseHeader('Content-Type');
// 					} else {
// 						var type = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
// 					}
// 					var blob = new Blob([response], { type: type });

// 					if (typeof window.navigator.msSaveBlob !== 'undefined') {
						
// 						window.navigator.msSaveBlob(blob, filename);
// 					} else {
// 						var URL = window.URL || window.webkitURL;
// 						var downloadUrl = URL.createObjectURL(blob);

// 						if (filename) {
// 							var a = document.createElement("a");
// 							if (typeof a.download === 'undefined') {
// 								window.location = downloadUrl;
// 							} else {
// 								a.href = downloadUrl;
// 								a.download = filename;
// 								document.body.appendChild(a);
// 								a.click();
// 							}
// 						} else {
// 							window.location = downloadUrl;
// 						}

// 						setTimeout(function () { URL.revokeObjectURL(downloadUrl); }, 100); // cleanup
// 					}
// 				})