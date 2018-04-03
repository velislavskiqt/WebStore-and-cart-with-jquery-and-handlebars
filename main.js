
var url = 'https://raw.githubusercontent.com/ProgressBG-WWW-Courses/JavaScript-Advanced/gh-pages/downloads/products.json';
var wrapper = document.getElementById('cartProducts');
var cart = document.getElementsByClassName('cart')[0];

$.get(url, function (response) {
	var data = JSON.parse(response);
	render(data)
})

function render(data) {
	var template = $('#product-template').html();
	var templateScript = Handlebars.compile(template);

	data.forEach(function (productObj) {
		var context = {
			"id": productObj.id,
			"name": productObj.name,
			"price": productObj.price,
			"image": productObj.image.small
		}
		var html = templateScript(context);
		$('#cartProducts').append(html);
	})
}
wrapper.addEventListener('click', addToCart);

function addToCart(e) {

	if (e.target.tagName === 'BUTTON') {
		var divEl = e.target.parentElement.parentElement;
		var name = divEl.querySelector('h3').innerText;
		var price = divEl.querySelector('label').innerText;
		var tmpl = `<div><span>${name}</span><span>${price}</span></div>`;
		cart.innerHTML += tmpl;
	}
};

