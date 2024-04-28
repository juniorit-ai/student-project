class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(itemName) {
    this.items = this.items.filter(item => item.name !== itemName);
  }

  calculateTotal() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
}

// Example usage:
const cart = new ShoppingCart();
cart.addItem({ name: 'Apple', price: 0.99 });
cart.addItem({ name: 'Bread', price: 2.49 });
console.log(`Total Price: $${cart.calculateTotal()}`);