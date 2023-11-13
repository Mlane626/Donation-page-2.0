document.addEventListener('DOMContentLoaded', function () {
    const donationForm = document.getElementById('donationForm');

    donationForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Basic validation
        const amount = document.getElementById('amount').value;
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        if (!amount || !name || !email) {
            alert('Please fill out all fields.');
        } else {
            // You can customize this part to handle the donation submission
            alert(`Thank you, ${name}! Your donation of $${amount} has been received.`);
            donationForm.reset();
        }
    });
});
