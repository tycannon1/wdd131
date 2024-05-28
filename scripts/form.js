document.addEventListener('DOMContentLoaded', function() {
    const productArray = [
        { id: 'product1', name: 'Product 1' },
        { id: 'product2', name: 'Product 2' },
        { id: 'product3', name: 'Product 3' },
        { id: 'product4', name: 'Product 4' }
    ];

    const productSelect = document.getElementById('productName');
    
    productArray.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
});