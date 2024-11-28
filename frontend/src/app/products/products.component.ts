import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../product.service';

@Component({
    selector: 'app-products',
    template: `
        <h2>Productos</h2>
        <ul>
            <li *ngFor="let product of products">
                {{ product.name }} - {{ product.price }} USD - {{ product.quantity }} unidades
            </li>
        </ul>
    `
})
export class ProductsComponent implements OnInit {
    products: Product[] = [];

    constructor(private productService: ProductService) {}

    ngOnInit(): void {
        this.productService.getProducts().subscribe(data => this.products = data);
    }
}
