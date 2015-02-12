function fetch(url){
	
	return new Promise(function(resolve, reject) {
		var request = new XMLHttpRequest();
		request.onload = onLoad;
		request.open('get', url);
		request.addEventListener('load', onLoad)
		request.addEventListener('error', onError)
		request.send();


		function onLoad () {
		    var response = JSON.parse(request.response);
		    console.log(response);
		}

		function onError(){
			console.log("ERORRRORORORO");

		}

	});

}

