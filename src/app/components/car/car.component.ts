import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private brandService: BrandService,
    private colorService: ColorService
  ) {}

  cars: Car[];
  brands: Brand[];
  brandId: number = -1;
  colors: Color[];
  colorId: number = -1;

  filterText: string;

  ngOnInit(): void {
    this.getBrands();
    this.getColors();

    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId'] && params['colorId']) {
        this.getCarsByFilter(params['brandId'], params['colorId']);
      } else if (params['brandId']) {
        this.getCarsByBrand(params['brandId']);
      } else if (params['colorId']) {
        this.getCarsByColor(params['colorId']);
      } else {
        this.getCars();
      }
    });
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
    });
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  getCarsByBrand(brandId: number) {
    this.carService.getCarsByBrand(brandId).subscribe((response) => {
      this.cars = response.data;
    });
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }

  getCarsByColor(colorId: number) {
    this.carService.getCarsByColors(colorId).subscribe((response) => {
      this.cars = response.data;
    });
  }

  getCarsByFilter(brandId: number, colorId: number) {
    if (brandId == -1 && colorId == -1) {
      this.getCars();
      return;
    } else if (brandId == -1) {
      this.getCarsByColor(colorId);
      return;
    } else if (colorId == -1) {
      this.getCarsByBrand(brandId);
      return;
    } else {
      this.carService
        .getCarsByFilter(brandId, colorId)
        .subscribe((response) => {
          this.cars = response.data;
        });
    }
  }
}
