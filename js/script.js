$(function(){
	console.log('DOM załadowany - można się bawić');

$('span:odd').css('color','red');

$('p').each(function(index){
	$(this).append('<button class="btn" data-tmp="' + index + '">Click me</button>');
});

$('button').click(function(){
	alert($(this).attr('data-tmp'));
});

$('p:odd').each(function(){
	$(this).prepend('<span>span 2</span>');
})

$('button:even').css({
	'background-color': 'blue',
	'color': 'white',
	'padding': '20px',
	'margin': '5px 5px'});

$('body').css({
	'background-color': 'pink',
	'margin': '0'});

$('button').click(function(){
	var $colors = ["pink", "yellow", "green", "black", "blue", "white", "grey","yellow", "green", "black", "blue", "white", "grey"];
	var $backgroundColor = $colors[$(this).attr('data-tmp')];
	$('body').removeAttr('background-color');
	$('body').css('background-color', $backgroundColor ); 
	}); 
	
});

