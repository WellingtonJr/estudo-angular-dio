import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  
  name: string = 'Wellington';
  newName: string;
  avatar: string = 'assets/images/profile-pic.png';

  constructor() { }

  ngOnInit(): void {
  }
  
  makeMeHero(){
    this.name = this.newName;
    this.avatar = 'assets/images/maria.jpeg';
  }
}
