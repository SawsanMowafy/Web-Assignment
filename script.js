function play() {
    const nav_list = document.getElementById("navlist");
    nav_list.classList.toggle("active");
}
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('orderForm').addEventListener('submit', function (event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const product = document.getElementById('product').value;
        const quantity = document.getElementById('quantity').value;
        const message = `Thank you, ${name}! Your order for ${quantity} ${product}(s) has been placed successfully.
        Wait for a message from us on your whatsapp.`;
        document.getElementById('orderMessage').innerText = message;
        document.getElementById('orderForm').reset();
    });
});