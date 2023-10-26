import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersFacade } from "@users/data-access";

@Component({
  selector: 'users-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  private readonly usersFacade = inject(UsersFacade)
  public users$ = this.usersFacade.users$;


  ngOnInit() {
    this.usersFacade.initUsers();
  }

  deleteCard(id: number) {
    this.usersFacade.deleteUser(id);
  }
}
