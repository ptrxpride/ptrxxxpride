document.querySelectorAll('.btn-beli').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault(); // tahan dulu biar bisa animasi

    let count = document.getElementById('cart-count');
    let current = parseInt(count.textContent);
    count.textContent = current + 1;

    let cartIcon = document.getElementById('cart-icon');
    cartIcon.classList.add('cart-bounce');

    // setelah animasi 500ms, redirect ke checkout
    setTimeout(() => {
      cartIcon.classList.remove('cart-bounce');
      window.location.href = btn.getAttribute('href'); // ambil href dari tombol
    }, 500);
  });
});