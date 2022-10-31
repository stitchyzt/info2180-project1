function load() {
	const btn = document.querySelector('button');
    
	btn.addEventListener("click", function(event){
		event.preventDefault();
		let email = document.querySelector('input').value;
		if (email) {
			document.querySelector('.message').innerHTML = 'Thank you! Your email address ' + email + ' has been added to our mailing list!';
		}else {
			document.querySelector('.message').innerHTML = 'Please enter a valid email address.'
		}
	});
}
window.addEventListener("load", load);