//name of JQuery function is a dollar sign
// Same as document.addEventListener("DOMContentLoaded")...
$(document).ready(function(){ 

	// same as document.querySelector("#navbarToggle").addEventListener("blur")
	$('.navbar-toggler').blur(function(event){
		var screenWidth = window.innerWidth;

		if(screenWidth < 768){
			$('#navbarToggler1').collapse("hide");
		}

	});

});



/* show each page using Ajax */

(function (global) {

var dc = {};

// the Url's
var homeHtml = "/../html-test/snippet/home_snippet.html";
var paintingHtml = "/../html-test/snippet/gallery.html";

// Convenience function for inserting innerHTML for 'select'
var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

// Show loading icon inside element identified by 'selector'.
var showLoading = function (selector) {
  var html = "<div class='text-center'>";
  html += "<img src='/../html-test/css/pic/ajax-loader-2.gif'></div>";
  insertHtml(selector, html);
};

// On page load (before images or CSS)
document.addEventListener("DOMContentLoaded", 
	function (event) {

		// On first load, show home view
		showLoading("#main-content");

		// call server
		$ajaxUtils.sendGetRequest(homeHtml,
		  function (responseText) {
		    document.querySelector("#main-content").innerHTML = responseText;
		  },
		  false);
});

dc.loadPainting = function (){
	showLoading("#main-content");
	$ajaxUtils.sendGetRequest(
		paintingHtml,
		function (responseText) {
		    document.querySelector("#main-content").innerHTML = responseText;
		  },
		false);
};



global.$dc = dc;

})(window);