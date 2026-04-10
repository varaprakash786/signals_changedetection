import { Component, linkedSignal, signal } from "@angular/core";
import { Item } from "../interface/item-interface";
import { HttpClient } from "@angular/common/http";
import { CommonModule } from "@angular/common";

@Component({
    selector:'app-filterproduct',
    imports:[CommonModule],
    templateUrl:'filterproduct.component.html',
    styleUrl:'filterproduct.component.css',
})

export class FilterProductComponent {
     allItems = signal<Item[]>([]);
  categories = signal<string[]>([]);
  selectedCategory = signal('');
  searchQuery = signal('');

  constructor(private http: HttpClient) {
    this.fetchItems();
  }

  fetchItems(): void {
    const apiUrl = 'https://dummyjson.com/products';

    this.http.get<{ products: Item[] }>(apiUrl).subscribe({
      next: (res) => {
        const items = res.products;
        this.allItems.set(items);

        const categories: string[] = [
          ...new Set(items.map((item) => item.category)),
        ];
        this.categories.set(categories);
      },
      error: (err) => console.error('Error: ', err),
    });
  }

  filteredItems = linkedSignal({
    source: this.allItems,
    computation: () => {
      const items = this.allItems();
      const category = this.selectedCategory();
      const query = this.searchQuery();

      return items.filter(
        (item) =>
          category === '' ||
          (item.category === category &&
            item.title.toLowerCase().includes(query.toLowerCase()))
      );
    },
  });

  updateCategory(event: Event) {
    const category = (event.target as HTMLSelectElement).value;
    this.selectedCategory.set(category);
  }

  updateSearchQuery(event: Event) {
    const query = (event.target as HTMLInputElement).value;
    this.searchQuery.set(query);
  }

    
}