function loadCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartItemsContainer = document.getElementById('cart-items');
  let total = 0;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
  } else {
    cartItemsContainer.innerHTML = cart
      .map((item, index) => {
        const { id, image, title, price } = item;
        const discountedPrice = parseFloat(price.discounted.replace('ksh. ', '').replace(',', ''));
        total += discountedPrice;
        return `
            <div class='cart-item'>
              <div class='row-img'>
                <img class='rowimg' src='${image}' style='width: 100px; height: auto;'></img>
              </div>
              <p style='font-size:12px;'>${title}</p>
              <h2 style='font-size: 15px;'>Ksh. ${discountedPrice.toFixed(2)}</h2>
              <button id='remove-btn' data-id="${id}">Remove</button>
            </div>
          `;
      })
      .join('');
    document.getElementById(
      'totalPrice'
    ).innerHTML = `<h2>Total: Ksh. ${total.toFixed(2)}</h2>`;
  }
}

function removeItemFromCart(index) {
  const cart = JSON.parse(localStorage.getItem('cart'));
  const newItems = cart.filter((item) => item.id !== index);
  localStorage.setItem('cart', JSON.stringify(newItems));
  loadCart();
}

document.addEventListener('DOMContentLoaded', () => {
  loadCart();
  document
    .getElementById('clear-cart')
    .addEventListener('click', () => {
      localStorage.removeItem('cart');
      loadCart();
    });

  document
    .getElementById('cart-items')
    .addEventListener('click', (event) => {
      if (event.target.id === 'remove-btn') {
        const index = event.target.dataset.id;
        removeItemFromCart(index);
      }
    });
});

const productsContainer = document.querySelector(
  '#products-container'
);
const moreProductsContainer = document.querySelector(
  '#more-products-container'
);
let addToCartBtns;
let wishListBtns;

document.addEventListener('DOMContentLoaded', () => {
  addToCartBtns = document.querySelectorAll('#addToCartBtn');
  wishListBtns = document.querySelectorAll('#addToWishlistBtn');

  addToCartBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const productId = btn.parentElement.parentElement.id;
      addToCart(productId);
    });
  });

  wishListBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const productId = btn.parentElement.parentElement.id;
      addToWishlist(productId);
    });
  });
});

const products = [
  {
    id: 'item1',
    image: './assets/images/411.jpeg',
    title: 'La Roche-Posay Cicaplast',
    price: {
      original: 'Ksh. 3,000',
      discounted: 'ksh. 2,800',
    },
  },
  {
    id: 'item2',
    image: './assets/images/412.jpeg',
    title: 'La Roche-Posay Ultra Micellar Water',
    price: {
      original: null,
      discounted: 'ksh. 2,900',
    },
  },
  {
    id: 'item3',
    image: './assets/images/413.jpeg',
    title: 'La Roche-Posay Niacinamide Serum',
    price: {
      original: null,
      discounted: 'ksh. 2,800',
    },
  },
  {
    id: 'item4',
    image: './assets/images/414.jpeg',
    title: 'La Roche-Posay Puryfying Foaming cleanser',
    price: {
      original: null,
      discounted: 'ksh. 2,500',
    },
  },
  {
    id: 'item5',
    image: './assets/images/416.jpeg',
    title: 'Cera Ve Moisturizing Cream',
    price: {
      original: 'ksh.2,200',
      discounted: 'ksh. 2,000',
    },
  },
  {
    id: 'item6',
    image: './assets/images/417.jpeg',
    title: 'Cera Ve Hydrating Facial cleanser',
    price: {
      original: null,
      discounted: 'ksh. 2,600',
    },
  },
];

const moreProducts = [
  {
    id: 'item7',
    image: './assets/images/412.jpeg',
    title: 'La Roche-Posay Ultra Micellar Water',
    price: {
      original: null,
      discounted: 'ksh. 2,900',
    },
  },
  {
    id: 'item8',
    image: './assets/images/413.jpeg',
    title: 'La Roche-Posay Niacinamide Serum',
    price: {
      original: null,
      discounted: 'ksh. 2,800',
    },
  },
  {
    id: 'item9',
    image: './assets/images/414.jpeg',
    title: 'La Roche-Posay Puryfying Foaming cleanser',
    price: {
      original: null,
      discounted: 'ksh. 2,500',
    },
  },
  {
    id: 'item10',
    image: './assets/images/416.jpeg',
    title: 'Cera Ve Moisturizing Cream',
    price: {
      original: 'ksh.2,200',
      discounted: 'ksh. 2,000',
    },
  },
];

const productsInCart = JSON.parse(
  localStorage.getItem('cart') || '[]'
);

function addToCart(productId) {
  const product = [...products, ...moreProducts].find(
    (product) => product.id === productId
  );
  productsInCart.push(product);
  localStorage.setItem(
    'cart',
    JSON.stringify(productsInCart)
  );
  alert('Product added to cart');
}

function addToWishlist(productId) {
  const product = [...products, ...moreProducts].find(
    (product) => product.id === productId
  );
  const wishlist = JSON.parse(
    localStorage.getItem('wishlist') || '[]'
  );
  wishlist.push(product);
  localStorage.setItem(
    'wishlist',
    JSON.stringify(wishlist)
  );
  alert('Product added to wishlist');
}

function renderProducts(products) {
  return products
    .map((product) => {
      return `
            <li class="scrollbar-item">
                <div class="shop-card">
                    <div class="card-banner img-holder" style="--width: 540; --height: 720;" id="${product.id}">
                        <img src="${product.image}" width="540" height="720" loading="lazy" alt="" class="img-cover">
                        <div id="title"></div>
                        ${product.price.original ? `<span class="badge" aria-label="20% off">-20%</span>` : ''}
                        <div class="card-actions">
                              <button class="action-btn" id="addToCartBtn" aria-label="add to cart">
                                  <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>
                              </button>
                              <button class="action-btn" id="addToWishlistBtn" aria-label="add to wishlist">
                                  <ion-icon name="star-outline" aria-hidden="true"></ion-icon>
                              </button>
                        </div>
                    </div>
                    <div class="card-content">
                        <div class="price">
                            ${product.price.original ? `<del class="del">${product.price.original}</del>` : ''}
                            <span class="span">${product.price.discounted}</span>
                        </div>
                        <h3>
                            <a href="#" class="card-title">${product.title}</a>
                        </h3>
                    </div>
                </div>
            </li>
        `;
    })
    .join('');
}

const productsMarkup = renderProducts(products);
const moreProductsMarkup = renderProducts(moreProducts);

productsContainer.innerHTML = productsMarkup;
moreProductsContainer.innerHTML = moreProductsMarkup;
