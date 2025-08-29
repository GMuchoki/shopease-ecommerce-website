const productsContainer = document.querySelector('.products-container');

if (!productsContainer) {
    console.error('No .products-container found in the DOM!');
}

fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(data => {
    data.products.forEach((product) => {
        console.log(product);

        const newProduct = document.createElement('div');
        productsContainer.appendChild(newProduct);

        newProduct.innerHTML = `
        <img src="${product.thumbnail}" alt="Product Image">
        <h3>${product.title}</h3>
        <p>Cost: ${product.price}</p>
        <p>Rating: ${product.rating}</p>
        `;
    });
});