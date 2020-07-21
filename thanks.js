var result = document.getElementById('result');
var resultInput = document.getElementById('mytextResult');
var text = window.location.hash.substring(1);

result.textContent = text;
resultInput.value = 'Здравствуйте! Хотелось бы заказать RaspberryBox по промокоду: '
	+ text + '. '
	+ 'Ссылка на мой RaspberryBox: https://ledo1988.github.io/RaspberryBox/offer.html';