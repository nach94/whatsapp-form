let boxMessage = document.getElementById('message');
let btnSend = document.getElementById('btnSend');
let wppNumber = '+5499999999999';

boxMessage.addEventListener('keyup', () => {
    if (boxMessage.value.length != 0) {
        btnSend.classList.remove('disabled');
        let message = `https://api.whatsapp.com/send?phone=${wppNumber}&text=${boxMessage.value} `;
        btnSend.href = message;
    } else{
        btnSend.classList.add('disabled');
    }
});