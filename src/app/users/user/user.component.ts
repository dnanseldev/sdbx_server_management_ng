import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: { id: number, name: string; };

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };

    this.route.params.subscribe(
      (updatedParam: Params) => {
        this.user.id = updatedParam['id'];
        this.user.name = updatedParam['name'];
      }
    );
  }

}
