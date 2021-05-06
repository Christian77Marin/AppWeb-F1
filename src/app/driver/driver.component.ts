import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Idriver } from '../domain/Idriver';
import { DriverProviderService } from '../services/driver-provider.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {


  driver!: Idriver;
  urlEndpoint: string = 'http://localhost:8080/ranking'

  constructor(private driverProviderService: DriverProviderService,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(params=>{
      let id: string= params['id'];
      this.urlEndpoint = 'http://localhost:8080/driver?id='+id;

      this.driverProviderService.getDriverData(this.urlEndpoint).subscribe(
        driver=>{this.driver = driver})
  })
  
  }
}
