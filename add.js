var addItemId = 0;

function addToCart(item) {
    addItemId += 1;
    var selectedItem = document.createElement('div');
    selectedItem.classList.add('card-banner', 'img-holder');
    selectedItem.setAttribute('id', 'item' + addItemId); 
    var img = document.createElement('img');
    img.setAttribute('src', './assets/images/413.jpeg');
    img.setAttribute('src', './assets/images/419.jpeg'); 
    img.setAttribute('src', './assets/images/411.jpeg');
    var cartItems = document.getElementById('title');
    selectedItem.appendChild(img);
    cartItems.appendChild(selectedItem);
}
