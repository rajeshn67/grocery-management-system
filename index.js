let stock = {
        'peanut Butter': 10,
        'Honey': 10,
        'Cadbury': 10,
        'Gulab Jamun': 10,
        'Maggi': 10,
        'Tata Tea': 10,
        'Dettol': 10,
        'Oreo': 10,
        'Chips': 10
    };

  
    let cart = {
        items: [],
        totalItems: 0,
        totalPrice: 0
    };

   
    function addToCart(itemName, itemPrice) {
       
        if (stock[itemName] > 0) {
          
            stock[itemName]--;

            
            const existingItem = cart.items.find(item => item.name === itemName);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.items.push({ name: itemName, price: itemPrice, quantity: 1 });
            }

            
            cart.totalItems++;
            cart.totalPrice += itemPrice;

            updateCartDisplay();
            updateStockDisplay(itemName);

            
            if (stock[itemName] < 4) {
                alert(`${itemName} stock is running low. Consider purchasing more soon.`);
            }
        } else {
            alert(`${itemName} is out of stock!`);
        }
    }


    function updateCartDisplay() {
        const cartItemsElement = document.getElementById('cart-items');
        cartItemsElement.innerHTML = '';

        cart.items.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} x${item.quantity} - ₹${item.price * item.quantity}`;
            cartItemsElement.appendChild(listItem);
        });

        document.getElementById('total-items').textContent = cart.totalItems;
        document.getElementById('total-price').textContent = cart.totalPrice;
    }

   
    function updateStockDisplay(itemName) {
        const productCards = document.querySelectorAll('.product-card');
        productCards.forEach(card => {
            const productTitle = card.querySelector('h3').textContent;
            if (productTitle === itemName) {
                const stockLabel = card.querySelector('.stock-label');
                if (stockLabel) {
                    stockLabel.textContent = `Stock: ${stock[itemName]}`;
                } else {
                    const newStockLabel = document.createElement('p');
                    newStockLabel.classList.add('stock-label');
                    newStockLabel.textContent = `Stock: ${stock[itemName]}`;
                    card.appendChild(newStockLabel);
                }
            }
        });
    }

   
    function checkout() {
        if (cart.totalItems > 0) {
            alert(`Thank you for your purchase! Total: ₹${cart.totalPrice}`);
          
            cart.items = [];
            cart.totalItems = 0;
            cart.totalPrice = 0;
            updateCartDisplay();
        } else {
            alert('Your cart is empty!');
        }
    }

    