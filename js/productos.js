const productos = [
    { name: 'Producto 1', price: 100, imgSrc: 'https://via.placeholder.com/200x200?text=Producto+1', description: 'Descripción del Producto 1' },
    { name: 'Producto 2', price: 150, imgSrc: 'https://via.placeholder.com/200x200?text=Producto+2', description: 'Descripción del Producto 2' },
    { name: 'Producto 3', price: 200, imgSrc: 'https://via.placeholder.com/200x200?text=Producto+3', description: 'Descripción del Producto 3' },
    { name: 'Producto 4', price: 250, imgSrc: 'https://via.placeholder.com/200x200?text=Producto+4', description: 'Descripción del Producto 4' },
    { name: 'Producto 5', price: 300, imgSrc: 'https://via.placeholder.com/200x200?text=Producto+5', description: 'Descripción del Producto 5' },
    { name: 'Producto 6', price: 350, imgSrc: 'https://via.placeholder.com/200x200?text=Producto+6', description: 'Descripción del Producto 6' },
    { name: 'Producto 7', price: 400, imgSrc: 'https://via.placeholder.com/200x200?text=Producto+7', description: 'Descripción del Producto 7' },
    { name: 'Producto 8', price: 450, imgSrc: 'https://via.placeholder.com/200x200?text=Producto+8', description: 'Descripción del Producto 8' },
    { name: 'Producto 9', price: 500, imgSrc: 'https://via.placeholder.com/200x200?text=Producto+9', description: 'Descripción del Producto 9' },
    { name: 'Producto 10', price: 550, imgSrc: 'https://via.placeholder.com/200x200?text=Producto+10', description: 'Descripción del Producto 10' }
];

document.addEventListener('DOMContentLoaded', () => {
    const productosContainer = document.getElementById('productos-destacados');
    productos.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('producto');
        productElement.innerHTML = `
            <img src="${product.imgSrc}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Precio: $${product.price}</p>
        `;
        productosContainer.appendChild(productElement);
    });
});
