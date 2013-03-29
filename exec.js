$(document).ready(function(){
$("#submit").click(function(){
	var queries = $("#texta").val();
	var list = queries.split('\n');
	for(var i = 0; i < list.length; i++){
		chrome.tabs.create({url: "http://www.google.com/search?q=" + list[i]});
	}
});
});