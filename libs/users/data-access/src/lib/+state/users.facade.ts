import { inject, Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectUsers } from "./users.selectors";
import { UsersAction } from "./users.action";

@Injectable({ providedIn: "root" })
export class UsersFacade {
  private readonly store = inject(Store);

  public readonly users$ = this.store.select(selectUsers);

  initUsers() {
    this.store.dispatch(UsersAction.loadUsers())
  }

  deleteUser(id: number) {
    this.store.dispatch(UsersAction.deleteUser({ id }))
  }
}
