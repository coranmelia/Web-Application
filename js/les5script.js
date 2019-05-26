// function sayHello (event){
// 	this.textContent = "Said it!";
// 	var name = document.getElementById("myname");
// 	var txt = document.getElementById("content");
// 	console.log(name.value);
// 	txt.innerHTML = "<h2>Hi "+name.value+"!</h2>";	

	

// 	if(name.value === "student"){
// 		var title = document.querySelector("#title");
// 		title.textContent += " test";
// 	}
// }

// // unobstrusive event binding
// document.querySelector("button")
// 	.addEventListener("click", sayHello);

// // or this: 
// //document.querySelector("button").onclick = sayHello;


// document.querySelector("body").addEventListener("mouseover", 
// 	function (event) {
// 			if(event.shiftKey === true){
// 				console.log(event.clientX);
// 				console.log(event.clientY);
// 			}
// 		});

/* New method to let Script sit on top of everything in HTML */
// document.addEventListener("DOMContentLoaded", 
// 	function (event){


// 	function sayHello (event){
// 		this.textContent = "Said it!";
// 		var name = document.getElementById("myname");
// 		var txt = document.getElementById("content");
// 		console.log(name.value);
// 		txt.innerHTML = "<h2>Hi "+name.value+"!</h2>";	

		

// 		if(name.value === "student"){
// 			var title = document.querySelector("#title");
// 			title.textContent += " test";
// 		}
// 	}

// 	// unobstrusive event binding
// 	document.querySelector("button").addEventListener("click", sayHello);

// 	// or this: 
// 	//document.querySelector("button").onclick = sayHello;

// });


// Event handling
document.addEventListener("DOMContentLoaded", 
	function (event){

	// unobstrusive event binding
	document.querySelector("button")
		.addEventListener("click", function(){
			
			// call server to get the name 
			$ajaxUtils.sendGetRequest("/data/name.txt", 
				function(request){
					var name = request.responseText;
					document.querySelector("#content").innerHTML = "<h2>Hello " + name + "!";
			});
		});

	// or this: 
	//document.querySelector("button").onclick = sayHello;

});


