let resultImage = document.getElementById('box-img__img');
let resultCard = document.getElementById('box-img__img-card');
let resultRate = document.getElementById('rate-calc');
let specialCodeHref = window.location.hash;
let specialCodeCookie;
let specialCode;

specialCodeHref = specialCodeHref.slice(1);

function getCookie(name) {
	let matches = document.cookie.match(new RegExp(
		"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}

specialCodeCookie = getCookie('raspberryBox');

if (specialCodeCookie !== null) {
	specialCode = specialCodeCookie;
} else {
	specialCode = specialCodeHref;
}

let specialArr = specialCode.split('-');

for (let i = 0; i < specialArr.length; i++) {
	specialArr[i] = specialArr[i].slice(1);
}

let specailObj = {
	color: specialArr[0],
	bunny: specialArr[1],
	ice: specialArr[2],
	card: specialArr[3],
	rate: specialArr[4],
}

function generateOffer (item) {

	if (item.ice === '') {
		resultImage.src = "img/" + item.color + "/img__" + item.color + '-' + item.bunny + '-5' + ".jpg";
	} else {
		resultImage.src = "img/" + item.color + "/img__" + item.color + '-' + item.bunny + '-6'  + '-' + item.ice + ".jpg";
	}

	resultCard.src = "img/boxCards/img__7-" + item.card + ".jpg";

	resultRate.textContent = item.rate;
}

//generateOffer(specailObj);
