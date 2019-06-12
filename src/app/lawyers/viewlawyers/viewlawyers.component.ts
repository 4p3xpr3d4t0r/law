import { Component, OnInit } from '@angular/core';
import { LawyersService } from '../lawyers.service';

@Component({
  selector: 'app-viewlawyers',
  templateUrl: './viewlawyers.component.html',
  styleUrls: ['./viewlawyers.component.scss']
})
export class ViewlawyersComponent implements OnInit {

  constructor( private lawyersService: LawyersService ) { }
  lawyerArray = [];

  ngOnInit() {
    this.lawyersService.getLawyers().subscribe(
      list => {
        this.lawyerArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        })
      }
    );
  }
on
}
