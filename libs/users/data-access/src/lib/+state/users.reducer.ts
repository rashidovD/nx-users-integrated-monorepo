import { createFeature, createReducer, on } from "@ngrx/store";
import { UsersAction } from "./users.action";

export type LoadingStatus = 'init' | 'loading' | 'loaded' | 'error'

export const USERS_FEATURE_KEY = 'users';

export interface UsersState  {
  status: LoadingStatus;
  users: any[]
}

export const initialState = {
  status: 'init',
  users: []
}


export const usersFeature = createFeature({
  name: USERS_FEATURE_KEY,
  reducer: createReducer(
    initialState,
    on(UsersAction.loadUsers, (state) => {
      return {
        ...state,
        status: 'loading' as const
      }
    }),
    on(UsersAction.loadUsersSuccess, (state, { users }) => {
      return {
        ...state,
        users,
        status: 'loaded' as const
      }
    }),
    on(UsersAction.deleteUser, (state, {id}) => {
      return {
        ...state,
        users: state.users.filter((user: any) => user.id !== id)
      }
    })
  )
})
