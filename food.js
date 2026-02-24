// Gallery

const buttons = document.querySelectorAll('.li01');
const items = document.querySelectorAll('.gallery-item');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {

        // active button
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        items.forEach(item => {
            if (filter === 'ALL' || item.getAttribute('data-category') === filter) {
                item.classList.remove('hide');
            } else {
                item.classList.add('hide');
            }
        });
    });
});

// Menu 

function addToCart(name, price, event) {
    event.preventDefault();

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({ name, price });

    localStorage.setItem("cart", JSON.stringify(cart));

    document.getElementById("cartcount").textContent = cart.length;

    alert(`${name} added to cart 🛒`);
}

window.onload = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.getElementById("cartcount").textContent = cart.length;
};

// Reservation


document.getElementById("reservationForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let fname = document.getElementById("fname").value.trim();
    let lname = document.getElementById("lname").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let date = document.getElementById("date").value;
    let table = document.getElementById("table").value;
    let email = document.getElementById("email").value.trim();
    let notes = document.getElementById("notes").value.trim();

    if (!fname || !lname || !phone || !date || !table || !email || !notes) {
        alert("❌ Please fill all required fields");
        return;
    }

    alert("✅ Reservation submitted successfully!");

    // Clear form
    document.getElementById("reservationForm").reset();
});


function demo() {

    var n1 = document.getElementById("email").value;

    var gmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

    if (n1 === "") {
        alert("Enter email address");
        return false;
    }
    else if (!gmail.test(n1)) {
        alert("Enter a valid email");
        return false;
    }
    else {
        alert("✔ Sign up submitted successfully!");
        return true;
    }
}

// Contact

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !phone || !email || !message) {
        alert("❌ Please fill all fields");
        return;
    }

    alert("✅ Message sent successfully!");

    this.reset();
});

// Addcard


function loadCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    document.getElementById("cartcount").textContent = cart.length;
    document.getElementById("cartCount").textContent = cart.length;

    let list = document.getElementById("cartList");
    list.innerHTML = "";

    cart.forEach((item, index) => {
        list.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            ${item.name} - $${item.price}
            <div>
                <button class="btn btn-sm btn-danger" onclick="removeItem(${index})">❌</button>
                <button class="btn btn-sm btn-primary" onclick="buySingleItem(${index})">Buy</button>
            </div>
        </li>`;
    });
}

function removeItem(i) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(i, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

function clearCart() {
    localStorage.removeItem("cart");
    loadCart();
}

function buySingleItem(i) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let item = cart[i];

    alert(`Buying:\n${item.name}\nPrice: $${item.price}`);

    cart.splice(i, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

function buyAll() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
        alert("Cart is empty!");
        return;
    }
    let total = cart.reduce((sum, item) => sum + item.price, 0);
    alert(`Total Amount: $${total.toFixed(2)}\nThank you!`);
    localStorage.removeItem("cart");
    loadCart();
}

window.onload = loadCart;

// Login


 function Login() {
        var n1 = document.getElementById("i1").value;
        var n2 = document.getElementById("i2").value;
        var n3 = document.getElementById("i3").value;
        var n4 = document.getElementById("i4").value;

        var alpha = /^[a-zA-Z]+$/;
        var number = /^[0-9]{10}$/;
        var gmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
        var password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&*]).{6,}$/;

        if (n1 === "") {
            alert("Enter the name");
        }
        else if (!alpha.test(n1)) {
            alert("Name must contain alphabets");
        }
        else if (n2 === "") {
            alert("Enter mobile number");
        }
        else if (!number.test(n2)) {
            alert("Mobile number must contain 10 digits");
        }
        else if (n3 === "") {
            alert("Enter your Gmail");
        }
        else if (!gmail.test(n3)) {
            alert("Enter a valid Gmail address");
        }
        else if (n4 === "") {
            alert("Enter the password");
        }
        else if (!password.test(n4)) {
            alert("Password does not meet the requirements");
        }
        else {
            alert("✔ Register successfully");
        }
    }