// Отправка кода между страницами
let mytext = document.getElementById('mytext');
let sendbtn = document.getElementById('sendbtn');

sendbtn.addEventListener('click', function() {
	mytext.value = 'specialCode';
	mytext = mytext.value;		
});

//Переключаем блоки формы
function switchForm() {
	let index = 0;
	
	let prevButton = document.getElementsByClassName('main-form__btn-prev')[0];
    let nextButton = document.getElementsByClassName('main-form__btn-next')[0];
	prevButton.addEventListener('click', function() { go(this); }, false);
    nextButton.addEventListener('click', function() { go(this); }, false);
	
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
		progressRate.textContent = Math.round(finalRate*index/(items.length - 2));
		
		progressBar.style.width = index/(items.length - 1)*100 + '%';
		
		for (let i = 0; i < items.length; i++) {
            items[i].classList.remove("form-group_active");	

            if (i == index)
              items[i].className += " form-group_active";
			  
			
        } 

				
	}
}

switchForm();