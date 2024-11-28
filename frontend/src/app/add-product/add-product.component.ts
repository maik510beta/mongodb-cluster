import { Component } from '@angular/core';
import { ProductService, Product } from '../product.service';

@Component({
    selector: 'app-add-product',
    template: `
        <h2>Añadir Producto</h2>
        <form (ngSubmit)="addProduct()">
            <input type="text" [(ngModel)]="product.name" name="name" placeholder="Nombre" required>
            <input type="number" [(ngModel)]="product.price" name="price" placeholder="Precio" required>
            <input type="number" [(ngModel)]="product.quantity" name="quantity" placeholder="Cantidad" required>
            <button type="submit">Agregar</button>
        </form>
    `
})
export class AddProductComponent {
    product: Product = { name: '', price: 0, quantity: 0 };

    constructor(private productService: ProductService) {}

    addProduct(): void {
        this.productService.addProduct(this.product).subscribe(() => {
            alert('Producto agregado');
        });
    }
}
