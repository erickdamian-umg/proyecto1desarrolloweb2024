document.addEventListener('DOMContentLoaded', () => {
    const productos = document.querySelectorAll('.producto');
    const carritoContenido = document.getElementById('carrito-contenido');
    const totalSpan = document.getElementById('total');
    let total = 0;

    productos.forEach(producto => {
        producto.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', JSON.stringify({
                name: producto.getAttribute('data-name'),
                price: producto.getAttribute('data-price'),
                imgSrc: producto.querySelector('img').src
            }));
        });
    });

    carritoContenido.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    carritoContenido.addEventListener('drop', (e) => {
        e.preventDefault();
        const data = JSON.parse(e.dataTransfer.getData('text/plain'));
        addToCart(data);
    });

    function addToCart(product) {
        const productoExistente = document.querySelector(`[data-name="${product.name}"]`);
        if (productoExistente) {
            const cantidad = productoExistente.querySelector('.cantidad');
            cantidad.textContent = parseInt(cantidad.textContent) + 1;
        } else {
            const newProducto = document.createElement('div');
            newProducto.setAttribute('data-name', product.name);
            newProducto.innerHTML = `
                <img src="${product.imgSrc}" alt="${product.name}" width="50">
                <p>${product.name} - $${product.price}</p>
                <p>Cantidad: <span class="cantidad">1</span></p>
                <p>Coste Total: $<span class="coste-total">${product.price}</span></p>
            `;
            carritoContenido.appendChild(newProducto);
        }
        total += parseFloat(product.price);
        totalSpan.textContent = total.toFixed(2);
    }
});
