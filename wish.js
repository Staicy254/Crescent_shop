function loadWishlist() {
  const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  const wishlistItemsContainer =
    document.getElementById('wishlist-items');

  if (wishlist.length === 0) {
    wishlistItemsContainer.innerHTML =
      '<p>Your wishlist is empty.</p>';
  } else {
    wishlistItemsContainer.innerHTML = wishlist
      .map((item, index) => {
        const { id, image, title, price } = item;
        return `
            <div class='wishlist-item'>
              <div class='row-img'>
                <img class='rowimg' src='${image}' style='width: 100px; height: auto;'></img>
              </div>
              <p style='font-size:12px;'>${title}</p>
              <h2 style='font-size: 15px;'> ${price.discounted}</h2>
              <button id='remove-btn' data-id="${id}">Remove</button>
            </div>
          `;
      })
      .join('');
  }
}

function removeItemFromWishlist(index) {
  const wishlist = JSON.parse(localStorage.getItem('wishlist'));
  const newItems = wishlist.filter((item) => item.id !== index);
  localStorage.setItem('wishlist', JSON.stringify(newItems));
  loadWishlist();
}

document.addEventListener('DOMContentLoaded', () => {
  loadWishlist();
  document
    .getElementById('clear-wishlist')
    .addEventListener('click', () => {
      localStorage.removeItem('wishlist');
      loadWishlist();
    });

  document
    .getElementById('wishlist-items')
    .addEventListener('click', (event) => {
      if (event.target.id === 'remove-btn') {
        const index = event.target.dataset.id;
        console.log(index);
        removeItemFromWishlist(index);
      }
    });
});
