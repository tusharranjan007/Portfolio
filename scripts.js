function toggleMobileMenu(){
	document.getElementById("menu").classList.toggle("active");
}
// Form validation
document.querySelector('form').addEventListener('submit', function (event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('All fields are required!');
        event.preventDefault();
    }
});

// Dynamic content loading
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        fetch(this.href)
            .then(response => response.text())
            .then(html => {
                document.querySelector('main').innerHTML = html;
            });
    });
});

// Button hover effect
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('mouseover', function () {
        this.style.transform = 'scale(1.1)';
    });
    button.addEventListener('mouseout', function () {
        this.style.transform = 'scale(1)';
    });
});

