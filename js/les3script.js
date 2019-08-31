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


/* show page with Ajax */

(function (global) {

var dc = {};

// the Url's
var homeHtml = "/../Web-Application/snippet/home_snippet.html";
var studioHtml = "/../Web-Application/snippet/gallery.html";

// Convenience function for inserting innerHTML for 'select'
var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

// Show loading icon inside element identified by 'selector'.
var showLoading = function (selector) {
  var html = "<div class='text-center'>";
  html += "<img src='/../Web-Application/css/pic/preloader.gif'></div>";
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

dc.loadHome = function (){
	showLoading("#main-content");
	$ajaxUtils.sendGetRequest(
		homeHtml,
		function (responseText) {
		    document.querySelector("#main-content").innerHTML = responseText;
		  },
		false);
};

dc.loadWeb= function (){
	showLoading("#main-content");
	$ajaxUtils.sendGetRequest(
		StudioHtml,
		function (responseText) {
		    document.querySelector("#main-content").innerHTML = responseText;
		  },
		false);
};

dc.loadStudio= function (){
	showLoading("#main-content");
	$ajaxUtils.sendGetRequest(
		StudioHtml,
		function (responseText) {
		    document.querySelector("#main-content").innerHTML = responseText;
		  },
		false);
};

dc.loadMobile= function (){
	showLoading("#main-content");
	$ajaxUtils.sendGetRequest(
		MobileHtml,
		function (responseText) {
		    document.querySelector("#main-content").innerHTML = responseText;
		  },
		false);
};

dc.loadData= function (){
	showLoading("#main-content");
	$ajaxUtils.sendGetRequest(
		DataHtml,
		function (responseText) {
		    document.querySelector("#main-content").innerHTML = responseText;
		  },
		false);
};



global.$dc = dc;

})(window);


$(function() {
  $('a[href*=\\#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 800, 'linear');
  });
});


$('a').click(function(e) {
	e.preventDefault();
	newLocation = this.href;
	$('body').fadeOut('slow', newpage);
	});
	function newpage() {
	window.location = newLocation;
}

/*! Fades in whole page on load */
$(document).ready(function(){
	$('body').css('display', 'none');
	$('body').fadeIn(1000);
}); 

function Reload() {
	try {
	var headElement = document.getElementsByTagName("head")[0];
	if (headElement && headElement.innerHTML)
	headElement.innerHTML += "<meta http-equiv=\"refresh\" content=\"1\">";
	}
	catch (e) {
	}
}
