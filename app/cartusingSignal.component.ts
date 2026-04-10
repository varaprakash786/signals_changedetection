import { CommonModule } from "@angular/common";
import { Component, computed, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector:'app-cartSignal',
    imports:[FormsModule,CommonModule],
    template:`
   <div class="container">
  <div class="addItemForm">
    <h2>Add Item</h2>
    <form (ngSubmit)="addItem()">
      <label for="itemName">Item Name:</label>
      <input
        type="text"
        id="itemName"
        [(ngModel)]="newItemName"
        name="itemName"
        required
      />

      <label for="itemPrice">Item Price:</label>
      <input
        type="number"
        id="itemPrice"
        [(ngModel)]="newItemPrice"
        name="itemPrice"
        required
      />
      <button type="submit" class="addItem">Add Item</button>
    </form>
  </div>
  <div class="cart">
    <h2>Cart</h2>
    <ul>
      @for (item of itemList(); track item) {
      <li>
        {{ item.name }} - {{ item.price | currency : "USD" }}
        <button (click)="removeItem(item)">Remove</button>
      </li>
      }
    </ul>
    <p>Total Price: {{ totalPrice() | currency : "USD" }}</p>
  </div>
</div>

    `,
    styles:`
 /* General container styling */
.container {
  display: flex;
  flex-wrap: wrap; /* Ensures content wraps for smaller screens */
  gap: 20px; /* Adds space between items */
  justify-content: center; /* Centers items */
  align-items: stretch; /* Ensures equal height for children */
  padding: 20px; /* Adds padding for overall layout */
  height: max-content; /* Set a fixed height for the container */
  max-height: 100vh; /* Ensure responsiveness for larger screens */
}

/* Form container */
.addItemForm {
  flex: 1; /* Ensures it adjusts with the screen size */
  min-width: 300px; /* Sets a minimum width for smaller screens */
  max-width: 500px; /* Sets a maximum width for larger screens */
  margin: 0 auto; /* Centers the form on small screens */
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* Modern box shadow */
  color: #023c76;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Even spacing for form content */
  height: 350px; /* Matches the height of the cart */
}

.addItemForm h2 {
  text-align: center;
  font-size: 1.8rem; /* Responsive font size */
  margin-bottom: 15px;
  color: #023c76;
}

form {
  display: flex;
  flex-direction: column;
}

/* Form labels */
label {
  margin-bottom: 5px;
  font-size: 1rem;
  color: #333; /* Neutral text color */
}

/* Form inputs */
input {
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

input:focus {
  border-color: #023c76; /* Highlighted border on focus */
}

/* Submit button */
button {
  padding: 10px;
  cursor: pointer;
  background-color: #ff4500;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #e63e00; /* Darker shade on hover */
}

/* Cart container */
.cart {
  flex: 1; /* Ensures it adjusts with the screen size */
  min-width: 300px;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* Modern box shadow */
  display: flex;
  flex-direction: column;
  height: 350px; /* Matches the height of the form */
  overflow-y: auto; /* Makes the cart scrollable */
}

.cart h2 {
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 15px;
  color: #023c76;
}

/* List items */
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  flex-grow: 1; /* Allows list to expand and use available space */
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f9f9f9; /* Light background for items */
  color: #023c76;
  border-radius: 4px;
  font-size: 1rem;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow */
}

/* Paragraph styling */
p {
  font-weight: bold;
  margin-top: 10px;
  text-align: right;
  color: #023c76;
  font-size: 20px;
}

/* Media queries for responsiveness */
@media (max-width: 768px) {
  .container {
    flex-direction: column; /* Stack items vertically on smaller screens */
    height: auto; /* Adjust height for smaller screens */
    padding: 10px;
  }

  .addItemForm,
  .cart {
    width: 100%; /* Use full width on smaller screens */
    height: auto; /* Remove height constraints on smaller screens */
    margin: 0 0 20px 0; /* Add space between sections */
  }

  button {
    font-size: 1rem;
    padding: 10px;
  }

  li {
    flex-direction: column; /* Stack content in list items */
    align-items: flex-start;
  }

  li span {
    margin-top: 5px;
  }
}


    `,
    standalone:true
})

export class CartUsingSignalComponent {
   newItemName: string = '';
  newItemPrice: number | null = null;

  items = [
    { name: 'Product A', price: 10 },
    { name: 'Product B', price: 15 },
    { name: 'Product C', price: 12 },
  ];

  itemList = signal(this.items);

  addItem() {
    if (this.newItemName && this.newItemPrice !== null) {
      const newItem = { name: this.newItemName, price: this.newItemPrice };
      this.itemList.set([...this.itemList(), newItem]);

      this.newItemName = '';
      this.newItemPrice = null; //Reset fields
    }
  }

  removeItem(item: { name: string; price: number }) {
    this.itemList.set(this.itemList().filter((i) => i !== item));
  }

  totalPrice = computed(() => {
    return this.itemList().reduce((acc, curr) => acc + curr.price, 0);
  });

    
}