var resultImage = document.getElementById('box-img__img');
var resultCard = document.getElementById('box-img__img-card');
var resultRate = document.getElementById('rate-calc');
let specialCode = window.location.hash;

specialCode = specialCode.slice(1);

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

generateOffer(specailObj);
