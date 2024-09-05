document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productId = this.parentElement.getAttribute('data-id');
        // Here, you might want to interact with an API, add the product to a cart in local storage, etc.
        alert('Added product with ID ' + productId + ' to cart!');
    });
});
