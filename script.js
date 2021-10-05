
$('document').ready(function () {
	$(window).scroll(function () {
		$('nav').toggleClass('scrolled', $(this).scrollTop() > 150);
	});

	$(".filter-button").click(function () {
		var value = $(this).attr('data-filter');

		if (value == "all") {
			$('.filter').show('500');
		}
		else {
			$(".filter").not('.' + value).hide('0');
			$('.filter').filter('.' + value).show('0');

		}
	});

	var header = document.getElementById("filter-buttons");
	var btns = header.getElementsByClassName("btn-dark");
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function () {
			var current = document.getElementsByClassName("active");
			current[0].className = current[0].className.replace(" active", "");
			this.className += " active";
		});
	}

	var btn = $('#button');

	$(window).scroll(function () {
		if ($(window).scrollTop() > 300) {
			btn.addClass('show');
		} else {
			btn.removeClass('show');
		}
	});

	btn.on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: 0 }, '100');
	});
});



function show() {
	var dots = document.getElementById("dots");
	var moreText = document.getElementById("more");
	var btnText = document.getElementById("myBtn");

	if (dots.style.display === "none") {
		dots.style.display = "inline";
		btnText.innerHTML = "Read more";
		moreText.style.display = "none";
	} else {
		dots.style.display = "none";
		btnText.innerHTML = "Read less";
		moreText.style.display = "inline";
	}
}

function validateForm() {
	var firstName = document.forms["forma"]["fname"].value;
	if (firstName == "") {
		alert("Name must be filled out");
		return false;
	}
	var lastName = document.forms["forma"]["lname"].value;
	if (lastName == "") {
		alert("Last name must be filled out");
		return false;
	}
	var email = document.forms["forma"]["email"].value;
	if (email == "") {
		alert("E-mail must be filled out");
		return false;
	}
	var password = document.forms["forma"]["password"].value;
	if (password == "") {
		alert("Password must be filled out");
		return false;
	}
	else {
		alert("The form was submitted");
	}
}

function validateDate() {
	var day, month, year, text, text1, currentYear;
	currentYear = new Date().getFullYear();
	day = document.getElementById("day").value;
	month = document.getElementById("month").value;
	year = document.getElementById("year").value;

	if (isNaN(day) || day < 1 || day > 31) {
		text = "Day: please enter a number from 1-31";
	}
	else {
		text = "";
	}
	if (isNaN(month) || month < 1 || month > 12) {
		text1 = "Month: please enter a number from 1-12";
	}
	else {
		text1 = "";
	}
	if (isNaN(year) || year < 1 || year > currentYear) {
		text2 = "Year: please enter a valid year";
	}
	else {
		text2 = "";
	}
	document.getElementById("day-text").innerHTML = text;
	document.getElementById("day-text").style.color = "red";
	document.getElementById("day-text").style.fontSize = "10px";

	document.getElementById("month-text").innerHTML = text1;
	document.getElementById("month-text").style.color = "red";
	document.getElementById("month-text").style.fontSize = "10px";

	document.getElementById("year-text").innerHTML = text2;
	document.getElementById("year-text").style.color = "red";
	document.getElementById("year-text").style.fontSize = "10px";
}

var check = function () {
	if (document.getElementById('password').value ==
		document.getElementById('confirm_password').value) {
		document.getElementById('message').style.color = 'green';
		document.getElementById('message').innerHTML = 'Matching passwords';
	} else {
		document.getElementById('message').style.color = 'red';
		document.getElementById('message').innerHTML = 'Passwords do not match';
	}
}

function DOM() {
	var para = document.createElement("P");
	var link = document.createElement("A");
	para.innerHTML = "DOM parapgraph made by a function. ";
	link.innerHTML = "DOM anchor made by a function.";

	link.href = "https://www.simplyrecipes.com/";
	link.style.fontSize = "18px";
	link.style.color = "black";
	link.style.textDecoration = "underline";
	para.style.display = "inline-block";

	document.getElementById("about-text").appendChild(para);
	para.after(link);
}
