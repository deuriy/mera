/*=require ./includes/blocks/*.js*/
document.addEventListener('DOMContentLoaded', function() {
	// Advantages
	document.addEventListener('click', function(e) {
		let advantagesItemTitle = e.target.closest('.Advantages_itemTitle');

		if (!advantagesItemTitle) return;

		let advantagesItem = advantagesItemTitle.closest('.Advantages_item');
		let advantages = advantagesItem.closest('.Advantages');
		let activeAdvantagesItem = advantages.querySelector('.Advantages_item-active');

		if (activeAdvantagesItem && activeAdvantagesItem != advantagesItem) {
			activeAdvantagesItem.classList.remove('Advantages_item-active');
		}

		advantagesItem.classList.add('Advantages_item-active');
		let index = advantagesItem.dataset.index;

		let activeAdvantagesImgWrapper = advantages.querySelector('.Advantages_imgWrapper-active');
		activeAdvantagesImgWrapper.classList.remove('Advantages_imgWrapper-active');

		let advantagesImgWrapper = advantages.querySelector(`.Advantages_imgWrapper[data-index="${index}"]`);
		advantagesImgWrapper.classList.add('Advantages_imgWrapper-active');

		console.log(index);
	});

	function checkHeaderPosition() {
		let scrolled = document.documentElement.scrollTop;
		let header = document.querySelector('.Header');
		let headerLogo = header.querySelector('.Logo');
		let mainMenu = header.querySelector('.MainMenu');
		let headerPhone = header.querySelector('.Phone');

		if (scrolled > 150) {
			header.classList.add('Header-sticky');
			if (header.classList.contains('Header-frontpage')) {
				headerLogo.querySelector('.Logo_imgWhite').classList.add('hidden');
				headerLogo.querySelector('.Logo_imgRoze').classList.remove('hidden');
				mainMenu.classList.add('MainMenu-black');
				headerPhone.classList.add('Phone-black');
			}
		} else {
			header.classList.remove('Header-sticky');
			if (header.classList.contains('Header-frontpage')) {
				headerLogo.querySelector('.Logo_imgWhite').classList.remove('hidden');
				headerLogo.querySelector('.Logo_imgRoze').classList.add('hidden');
				mainMenu.classList.remove('MainMenu-black');
				headerPhone.classList.remove('Phone-black');
			}
		}
	}

	window.addEventListener('scroll', checkHeaderPosition);
	checkHeaderPosition();
});