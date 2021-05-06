import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RacesProviderService } from '../services/races-provider.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  races: string[] = [];

  constructor(private racesProvider: RacesProviderService,
              private loc: Location,
              public route :Router,
              
    ) { }

  urlEndpoint: string = "http://localhost:8080/races"

  ngOnInit(): void {
    this.racesProvider.getDrivers(this.urlEndpoint).subscribe(
      races=>{this.races = races}
      
    )
    
  }



  GoBack(){
    this.loc.back();
  }


  }


