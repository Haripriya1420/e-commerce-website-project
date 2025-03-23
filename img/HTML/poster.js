document.getElementById('showPrice').addEventListener('click', function() {
    var priceElement = document.getElementById('price');
    if (priceElement.style.display === 'none') {
        priceElement.style.display = 'block';
    } else {
        priceElement.style.display = 'none';
    }
});
