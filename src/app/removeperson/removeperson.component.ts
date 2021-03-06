import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DbService } from '../services/db.service';
import { NgForm } from '@angular/forms';
import { IPerson } from '../interfaces/iperson';

@Component({
  selector: 'app-removeperson',
  templateUrl: './removeperson.component.html',
  styleUrls: ['./removeperson.component.css']
})
export class RemovepersonComponent implements OnInit {
    @Output() deleteClicked = new EventEmitter<any>();

  baseURL = 'https://stproject-4aac3.firebaseio.com/';
  rootNode = 'people';
  delete = true;

  peopleCollection: Array<IPerson> = [];

  constructor(private dbService: DbService) { }

  ngOnInit() {
  }

  deleteData(id){
      this.dbService.deleteData(`${this.baseURL}/${this.rootNode}/${id}.json`)
       .subscribe(
         (response) => console.log(response),
         (error) => console.log(error)
       );

     alert("Data Deleted Successfully");  
  }
  
}
