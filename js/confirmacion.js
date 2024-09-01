document.addEventListener('DOMContentLoaded', () => {
    const compraContenido = document.getElementById('compra-contenido');
    const totalFinalSpan = document.getElementById('total-final');
    const confirmarCompraBtn = document.getElementById('confirmar-compra');
    let totalFinal = 0;

    // Simulando que los productos están almacenados en Web SQL o Local Storage
    const productos = [
        { name: 'Producto 1', price: 100, quantity: 2 },
        // Añadir más productos aquí según lo que el carrito tenga
    ];

    productos.forEach(product => {
        const productoDiv = document.createElement('div');
        productoDiv.innerHTML = `
            <p>${product.name} - $${product.price} x <input type="number" value="${product.quantity}" min="1"></p>
        `;
        compraContenido.appendChild(productoDiv);

        productoDiv.querySelector('input').addEventListener('change', (e) => {
            const cantidad = e.target.value;
            actualizarTotal(product.price, cantidad);
        });

        totalFinal += product.price * product.quantity;
    });

    totalFinalSpan.textContent = totalFinal.toFixed(2);

    confirmarCompraBtn.addEventListener('click', () => {
        alert('Compra confirmada!');
        // Aquí puedes añadir código para procesar la compra
    });

    function actualizarTotal(price, quantity) {
        totalFinal = 0;
        compraContenido.querySelectorAll('input').forEach(input => {
            const precio = parseFloat(input.closest('p').textContent.match(/\$([0-9\.]+)/)[1]);
            totalFinal += precio * input.value;
        });
        totalFinalSpan.textContent = totalFinal.toFixed(2);
    }
});
