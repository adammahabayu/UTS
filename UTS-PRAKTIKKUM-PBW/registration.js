document.getElementById('registrationForm').addEventListener('submit', function(event) {
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');

    if (nameInput.value.trim() === '') {
        alert('Nama tidak boleh kosong!');
        event.preventDefault();
        return;
    }

    if (emailInput.value.trim() === '') {
        alert('Email tidak boleh kosong!');
        event.preventDefault();
        return;
    }
});
