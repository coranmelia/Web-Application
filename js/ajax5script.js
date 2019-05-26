(function(global){


	var ajaxUtils = {};

// Return a HTTP request object, check what type of object is available to us
	function getRequestObject(){
		if(window.XMLHttpRequest) {
			return (new XMLHttpRequest()); // most current object
		}
		else { // for old browser, in case Ajax is not supported
			global.alert("Ajax is not supported");
			return (null);
		}
	}


// make an Ajax GET request to 'requestUrl'
/* Function to set up the parameters
	requestUrl: know where to make the GET request 
    responseHandler: what is going to handle the result that server returns */

	ajaxUtils.sendGetRequest = function(requestUrl, responseHandler){
		// get new XMLHttpRequest object
		var request = getRequestObject();  
		
		request.onreadystatechange = function (){
			// pass a request and responseHandler 
			// every time there is a change in communication state
			handleResponse(request, responseHandler); 
		};
		// make the GET request
		request.open("GET", requestUrl, true);
		request.send(null); // for POST
	};

// only call user provided 'respnseHandler'
// function if response is ready and no error presents
	function handleResponse(request, responseHandler){
		if ((request.readyState == 4) /* ready status 4 */
			&& (request.status == 200) /* status code 200 means ok */){
			responseHandler(request);
		}
	}

// expose utility to global object

	global.$ajaxUtils = ajaxUtils;

})(window);