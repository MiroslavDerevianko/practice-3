function renderCartItem(item) {
    return `
    <li data-item-id="${item.id}" data-item-qty="1" data-item-price="${item.price}" data-item-total="${item.price}">
        <h5 class="item-name">${item.name}</h5>
        <div class="item-info-wrapper">
            <div class="qty-wrapper">Qty: <span class="item-qty">1</span></div>
            <div class="price-wrapper"> Price: $<span class="item-price">${item.price}</span></div>
            <button class="btn btn-sm btn-outline-danger remove" data-item-id="${item.id}">Remove</button>
        </div>
    </li>
    `;
}

export default class ShoppingCart {
    constructor(rootEl) {
        this.cartEl = rootEl.querySelector(".shopping-cart-list");
        this.totalEl = rootEl.querySelector(".total");
        this.emptyCartEl = rootEl.querySelector(".empty-cart-message");
        this.removeAllEl = rootEl.querySelector(".remove-all");
        this.addEventListeners();
    }

    /**
     * Adds initial event listeners
     * @returns {undefined}
     */
    addEventListeners() {
        this.removeAllEl.onclick = (event) => this.removeAll();
        this.cartEl.onclick = (event) => this.removeItem(event.target.getAttribute("data-item-id"));

        // Change me!
    }

    /**
     * Adds new item to the cart
     * or increments its quantity if item is already present.
     * @param {Object} item - item description object
     * @returns {undefined}
     */
    addItem(item) {
        if (!this.isItemInCart(item.id)) {
            this.addNewItem(item);
        } else {
            this.incrementItem(item);
        }

        this.updateCartState();
    }

    /**
     * Renders new item in the cart
     * @param {Object} item - item description object
     * @returns {undefined}
     */
    addNewItem(item) {
        this.cartEl.innerHTML += renderCartItem(item);
    }

    /**
     * Increments quantity and total price for existing cart item
     * @param {Object} item - item description object
     * @returns {undefined}
     */
    incrementItem(item) {
        // Change me!
        const l = [...this.cartEl.children].find((el) => el.getAttribute("data-item-id") === item.id);
        let qty = Number.parseInt(l.getAttribute('data-item-qty'));
        ++qty;
        l.setAttribute('data-item-qty', `${qty}`);
        l.querySelector('.item-qty').innerHTML = `${qty}`;
    }

    /**
     * Checks existence of item in shopping cart by its id
     * @param {string} id - ID of an item
     * @returns {boolean} - true if item is present in shopping cart, false otherwise
     */
    isItemInCart(id) {
    	return [...this.cartEl.children].some((item) => item.getAttribute("data-item-id") === id);
        // Change me!
    }

    /**
     * Checks if shopping cart is empty
     * @returns {boolean} true if there's no items in cart, false otherwise
     */
    isCartEmpty() {
        // Change me!
        return ([...this.cartEl.children].length === 0) ? true : false; 
    }

    /**
     * Removes all items from the cart
     * @returns {undefined}
     */
    removeAll() {
        // Change me!
        this.cartEl.innerHTML = "";
        this.updateCartState();
    }

    /**
     * Removes item from a list
     * @param {string} id - ID of and item to remove
     * @returns {undefined}
     */
    removeItem(id) {
        // Change me!
        let el = [...this.cartEl.children].find((item) => item.getAttribute("data-item-id") === id);
        this.cartEl.removeChild(el);
        this.updateCartState();
    }

    /**
     * Updates total sum and visibility of "no items" message / "remove all" button
     * @returns {undefined}
     */
    updateCartState() {
        this.updateTotal();
        this.updateNoItemsMessage();
        this.updateRemoveAllButton();
    }

    /**
     * Update total sum in cart
     * @returns {undefined}
     */
    updateTotal() {
        // Change me!
        this.totalEl.innerHTML = `${this.getTotalSum()}`
    }

    /**
     * Get total sum of all items in list
     * @returns {number} Total sum
     */
    getTotalSum() {
    	return [...this.cartEl.children].reduce((prev, item) => {
    		let price = Number.parseInt(item.getAttribute('data-item-qty')) * Number.parseInt(item.getAttribute('data-item-price'));
            return prev + price;
    	}, 0);
        // Change me!
    }

    /**
     * Updates visibility of cart "no items" message depending on state of the cart
     * @returns {undefined}
     */
    updateNoItemsMessage() {
        if (this.isCartEmpty()) {
            this.emptyCartEl.classList.remove("d-none");
        } else {
        	this.emptyCartEl.classList.add("d-none");
            // Change me!
        }
    }

    /**
     * Updates visibility of cart /"remove all" button depending on state of the cart
     * @returns {undefined}
     */
    updateRemoveAllButton() {
        // Change me!
        if (this.isCartEmpty()) {
            this.removeAllEl.classList.add("d-none");
        } else {
            this.removeAllEl.classList.remove("d-none");
        }
    }
}
