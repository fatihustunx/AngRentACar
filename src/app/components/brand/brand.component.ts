import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {
  constructor(private brandService: BrandService) {}

  brands: Brand[];
  currentBrand: Brand;

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  setCurrentBrand(brand: Brand) {
    this.currentBrand = brand;
  }

  getCurrentBrand(brand: Brand) {
    if (this.currentBrand == brand) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }

  getCurrentAllBrandClass() {
    if (this.currentBrand) {
      return 'list-group-item';
    } else {
      return 'list-group-item active';
    }
  }
}