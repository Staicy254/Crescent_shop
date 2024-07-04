document.addEventListener('DOMContentLoaded', (event) => {
    // Optional: Add any custom JavaScript here

    // Example: Log a message to ensure the script is loaded
    console.log('script.js is loaded and running');

    // Example: Automatic slide change for newCarousel (custom timing)
    const newCarousel = document.querySelector('#newCarousel');
    if (newCarousel) {
        new bootstrap.Carousel(newCarousel, {
            interval: 3000, // 3 seconds
            ride: 'carousel'
        });
    }
});
// JavaScript code to handle adding products to the cart
document.addEventListener('DOMContentLoaded', function() {
    // Select all "add to cart" buttons
    var addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
  
    // Add click event listener to each button
    addToCartButtons.forEach(function(button) {
      button.addEventListener('click', function(event) {
        // Prevent the default behavior of the button
        event.preventDefault();
  
        // Get the product details from the button's parent element
        var productCard = button.closest('.shop-card');
        var productName = productCard.querySelector('.card-title').textContent;
        var productPrice = productCard.querySelector('.price .span').textContent;
  
        // Add the product to the cart (you need to define your cart logic here)
        addToCart(productName, productPrice);
      });
    });
  
    // Function to add the product to the cart (you need to define your cart logic here)
    function addToCart(name, price) {
      // Example: You can add the product to an array or object representing the cart
      // For demonstration purposes, let's just log the product details
      console.log('Product added to cart:', name, price);
    }
  });
  