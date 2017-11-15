
/*

	/*var url= "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
	$.getJSON(url, function(data){
		$("quote").html(data.quoteText);
		$("author").html(data.quoteAuthor);
	}
});
	$(".tweet").click(function(){
		window.open("https://twitter.com/intent/tweet?text=");
	})

	$(".getQuote").click(function(){
		getQuote();
	})*/

$(document).ready(function(){
	var randomNum; //the random number wich will take a place as index int the array
	var randomQuote;
	var randomAuthor;
	function getQuote(){
		var quotes = //crate array that contains 10 quotes
		[
	"I love you the more in that I believe you had liked me for my own sake and for nothing else.",
	"But man is not made for defeat. A man can be destroyed but not defeated.",
	"When you reach the end of your rope, tie a knot in it and hang on.",
	"There is nothing permanent except change.",
	"You cannot shake hands with a clenched fist.",
	"Let us sacrifice our today so that our children can have a better tomorrow.",
	"It is better to be feared than loved, if you cannot be both.",
	"The most difficult thing is the decision to act, the rest is merely tenacity. The fears are paper tigers. You can do anything you decide to do. You can act to change and control your life; and the procedure, the process is its own reward.",
	"Do not mind anything that anyone tells you about anyone else. Judge everyone and everything for yourself.",
	"Learning never exhausts the mind.",
	];
		var auth = //create array that contains 10 authors 
		[
	"John Keats",
	"Ernest Hemingway",
	"Franklin D. Roosevelt",
	"Heraclitus",
	"Indira Gandhi",
	"A. P. J. Abdul Kalam",
	"Niccolo Machiavelli",
	"Amelia Earhart",
	"Henry James ",
	"Leonardo da Vinci ",
	];
		 randomNum = Math.floor((Math.random()*quotes.length)); //generate random number
		 randomQuote = quotes[randomNum];
		 randomAuthor = auth[randomNum];
	$(".quote").text(randomQuote);
	$(".author").text(randomAuthor);
	}

	$(".getQuote").on("click", function(){
		getQuote();
	});

	$(".tweet").on("click", function(){
		window.open("https://twitter.com/intent/tweet?text="+ randomQuote + " -" + randomAuthor + " -");
	});
});



