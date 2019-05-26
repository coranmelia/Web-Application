// Event handling
document.addEventListener("DOMContentLoaded", 
	function (event){

	// unobstrusive event binding
	document.querySelector("button")
		.addEventListener("click", function(){
			
			// call server to get the name 
			$ajaxUtils.sendGetRequest("/data/name.json", 
				function(request){
					var message = request.firstName + " " + request.lastName;

					if(request.property3){
						message += " loves Possum";
					}
					else{
						message += " doesn't like Possum";
					}

					document.querySelector("#content").innerHTML = "<h2>Hello " + message + "!";
			});
		});

	// or this: 
	//document.querySelector("button").onclick = sayHello;

});