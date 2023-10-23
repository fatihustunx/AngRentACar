import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarWithImg } from 'src/app/models/carWithImg';
import { CarWithImgService } from 'src/app/services/car-with-img.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-with-img',
  templateUrl: './car-with-img.component.html',
  styleUrls: ['./car-with-img.component.css']
})
export class CarWithImgComponent implements OnInit {

  imgUrl:string = "http://localhost:35845/Images";

  constructor(private carWithImgService:CarWithImgService,
    private carService:CarService, private activatedRoute:ActivatedRoute){}

  carWithImgs:CarWithImg[];
  
  car:Car;
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarDetails(params["carId"]);
        this.getImagesByCar(params["carId"]);
      }
    })
  }

  getCarDetails(carId:number){
    this.carService.getCarDetails(carId).subscribe(response=>{
      this.car = response.data;
    })
  }

  getImagesByCar(carId:number){
    this.carWithImgService.getImagesByCar(carId).subscribe(response=>{
      this.carWithImgs = response.data;
      this.carWithImgs.forEach(element => {
        element.imagePath = this.imgUrl + '/' + element.imagePath;
      });
    })
  }
}