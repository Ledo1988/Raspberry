// Отправка кода между страницами
let mytext = document.getElementById('mytext');
let sendbtn = document.getElementById('sendbtn');
let specialCode;


sendbtn.addEventListener('click', function() {
	mytext.value = specialCode;
	mytext = mytext.value;		
});

//Переключаем блоки формы
function switchForm() {
	let index = 0;
	let rateChange = 0;
	let iceRate = 0;
	let rateReduction = 0;
	
	let prevButton = document.getElementsByClassName('main-form__btn-prev')[0];
    let nextButton = document.getElementsByClassName('main-form__btn-next')[0];
	prevButton.addEventListener('click', function() { go(this); }, false);
    nextButton.addEventListener('click', function() { go(this); }, false);
	
	let iceAdd = document.querySelectorAll('.radio-inline__input-ice');
	iceAdd.forEach(item => {item.addEventListener('click', () => { iceRateCalc(item) }) });
	
	let rateReduce = document.querySelectorAll('.radio-inline__checkbox-percent');
	rateReduce.forEach(item => {item.addEventListener('click', () => { rateReduceCalc(item) }) });

	let colorChoice = document.querySelectorAll('.radio__color-choice');
	colorChoice.forEach(item => {item.addEventListener('click', () => { imageChoice(item, index) }) });

	let currentImg = document.getElementById('box-img__img');

	//Color for Image change
	let imgColor = {
		elColor: 'lemon',
		bunnyColor: 'white',
		iceColor: 'lemon',
		postCard: 'hi',
	};

	function makeid(length) {
		var result           = '';
		var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		var charactersLength = characters.length;
		for ( var i = 0; i < length; i++ ) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;
	}

	function specialCodeGen (imgColor) {
		specialCode = 'C' + imgColor.elColor + '-' + 'B' + imgColor.bunnyColor + '-' + 'I' + imgColor.iceColor + '-' + 'P' + imgColor.postCard  + '-' + makeid(5);
		return specialCode;
	}

	function imageChoice(el, index) {

		if (el.checked && el.hasAttribute("data-color")) {
			imgColor.elColor =  el.dataset.color;
		} else if (el.checked && el.hasAttribute("data-bunny")) {
			imgColor.bunnyColor = el.dataset.bunny;
			console.log(imgColor.bunnyColor);
		} else if (el.checked && el.hasAttribute("data-ice")) {
			imgColor.iceColor = el.dataset.ice;
		} else if (el.checked && el.hasAttribute("data-card")) {
			imgColor.postCard = el.dataset.card;
		}

		imgGenerator (imgColor, index);

		return imgColor;

	}

	function imgGenerator (color, index) {
		if (index < 1) {
			currentImg.src = "img/img__1.jpg";
		}
		else if (index == 1) {
			currentImg.src = "img/" + color.elColor + "/img__" + color.elColor + '-' + (1 + index) + ".jpg";
		} else if (index > 1 && index < 5 ) {
			currentImg.src = "img/" + color.elColor + "/img__" + color.elColor + '-' + color.bunnyColor + '-' + (1 + index) + ".jpg";
		}
		else if (index == 5) {
			if (!imgColor.iceColor == '') {
				currentImg.src = "img/" + color.elColor + "/img__" + color.elColor + '-' + color.bunnyColor + '-' + (1 + index) +'-' + color.iceColor  + ".jpg";
			} else {
				currentImg.src = "img/" + color.elColor + "/img__" + color.elColor + '-' + color.bunnyColor + '-' + index + ".jpg";
			}
		} else if (index == 6) {
			currentImg.src = "img/boxCards/img__7-" + color.postCard  + ".jpg";
		} else if (index > 6) {
			currentImg.src = "img/img__8.jpg";
		}
	}


	function rateReduceCalc(el) {

		let totalPercent = 0;		
	
		for (let i = 0; i < rateReduce.length; i++) {
			if (rateReduce[i].checked) {
				totalPercent =  totalPercent + Number.parseInt(rateReduce[i].dataset.type);
			}
        } 
	// final rate 3785 & 4625 - 840 ice-cream	
		if (iceRate > 0) {
			rateReduction = Math.round(4700*totalPercent/100/5)*5;
		} else {
			rateReduction = Math.round(3800*totalPercent/100/5)*5;
		}
	}
	

	function iceRateCalc(el) {	
	
		if (el && el.checked && el.dataset.type == 'positive') {
			iceRate = 885;	
		} else {
			iceRate = 0;
		}
		
		rateReduceCalc();
	}
	
	
	function go(el) {
		let finalRate = 3785;
		let buttons = document.querySelectorAll(".main-form__btn");
		let items = document.querySelectorAll(".main-form .form-group");
		let progressBar = document.getElementsByClassName('rate-bar__done')[0];
		let progressRate = document.getElementsByClassName('rate-bar__rate-calc')[0];		
		
		for(let i = 0; i < buttons.length; i++) {			 
			  buttons[i].classList.remove('main-form__btn_disable');
		}			
		
				
		if (el.dataset.type == 'next') {			
			index++;
			index = (index > items.length - 1) ? items.length - 1 : index;
			
			if (index == items.length - 1) {
				el.className += " main-form__btn_disable";
			}
		}
		
		if (el.dataset.type == 'prev') {			
            index--;
            index = (index < 0) ? 0 : index;
			
			if (index == 0) {
				el.className += " main-form__btn_disable";
			}
        }
				
		progressBar.style.width = index/(items.length - 1)*100 + '%';
		
		for (let i = 0; i < items.length; i++) {
			
            items[i].classList.remove("form-group_active");	
			
			if (i == index)
				items[i].className += " form-group_active";
			
        }

		if (index == 0) {
			rateChange = (el.dataset.type == 'next') ? 0: rateChange - 150;
		}		
		if (index == 1) {					
			rateChange = (el.dataset.type == 'next') ? rateChange + 150: rateChange - 855;
		}
		if (index == 2) {					
			rateChange = (el.dataset.type == 'next') ? rateChange + 855: rateChange - 1800;
		}
		if (index == 3) {					
			rateChange = (el.dataset.type == 'next') ? rateChange + 1800: rateChange - 530;
		}
		if (index == 4) {					
			rateChange = (el.dataset.type == 'next') ? rateChange + 530: rateChange - 555;
		}
		if (index == 5)	{
			rateChange = (el.dataset.type == 'next') ? rateChange + 555: rateChange - iceRate;
		}
		
		if (index == 6)	{
			rateChange = (el.dataset.type == 'next') ? rateChange + iceRate: rateChange - 85;
		}
				
		if (index == 7) {					
			rateChange = (el.dataset.type == 'next') ? rateChange + 85: rateChange + rateReduction;
		}
		
		if (index == 8) {					
			rateChange = (el.dataset.type == 'next') ? rateChange - rateReduction: rateChange;
		}

		progressRate.textContent = rateChange;

		imgGenerator(imgColor, index);

		specialCodeGen(imgColor);

		return index;
				
	}
}

switchForm();