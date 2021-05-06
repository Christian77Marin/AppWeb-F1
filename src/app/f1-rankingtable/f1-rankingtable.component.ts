
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Idriver } from '../domain/Idriver';
import { DriverProviderService } from '../services/driver-provider.service';



@Component({
  selector: 'app-f1-rankingtable',
  templateUrl: './f1-rankingtable.component.html',
  styleUrls: ['./f1-rankingtable.component.css'],
  
})
export class F1RankingtableComponent implements OnInit {



  ranking: string = "Ranking Global";
  drivers: Idriver[] = [];

  urlEndpoint: string = 'http://localhost:8080/ranking'


  constructor(private driverProviderService: DriverProviderService,
              private route: ActivatedRoute,
    ) { }




  ngOnInit() {
    
    this.route.params.subscribe(params=>{
      let id: string= params['id'];
      if(!id){
        this.ranking = "Ranking Global"
        this.urlEndpoint = 'http://localhost:8080/ranking'
      }else{
        this.ranking = "Ranking / " + id;
        this.urlEndpoint = 'http://localhost:8080/ranking?id='+id;
      }
      this.driverProviderService.getDrivers(this.urlEndpoint).subscribe(
        drivers=>{this.drivers = drivers}
        
      )

    }
      )






 
   
    
  }

}
