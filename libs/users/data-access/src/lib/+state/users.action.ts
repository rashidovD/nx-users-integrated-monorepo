import { createActionGroup, emptyProps, props } from "@ngrx/store";

export const UsersAction = createActionGroup({
  source: 'Users',
  events: {
    loadUsers: emptyProps(),
    loadUsersSuccess: props<{ users: any }>(),
    deleteUser: props<{ id: number }>()
  }
})
