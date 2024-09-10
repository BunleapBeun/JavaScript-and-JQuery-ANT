let total = 0;
function submit() {
    let fruit = document.getElementById("fruit").value;
    let price = document.getElementById("price").value;

    if (fruit == "") {
        document.getElementById("fruit-err").innerHTML = "Please enter a fruit";
    }
    if (price == "") {
        document.getElementById("price-err").innerHTML = "Please enter a price";
    } else if (isNaN(price)) {
        document.getElementById("price-err").innerHTML = "Invalid price";
    } else {
        // alert(`Fruit: ${fruit}\nPrice: $${price}`);
        clearForm();
        displayFruits(fruit, price);
        total += Number(price);
    }
}

function clearForm() {
    document.getElementById("fruit").value = "";
    document.getElementById("price").value = "";
    document.getElementById("fruit-err").innerHTML = "";
    document.getElementById("price-err").innerHTML = "";
}

function displayFruits(fruit, price) {
    let cards = document.getElementById("cards");
    let h5 = document.createElement("h5");
    h5.innerHTML = `Your fruit is: ${fruit} Price: ${price}`;
    cards.append(h5);
}

function totalPrice() {
    //   alert();
    document.getElementById("total-price").innerHTML = `Total Price: $${total}`;
}
