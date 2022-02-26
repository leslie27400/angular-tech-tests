import { ActionReducerMap } from "@ngrx/store";
import { userReducer } from "./user/user.reducer";
import { UserState, initialState as user } from "./user/user.state";
import { UserEffects } from "./user/user.effects";

export interface RootState {
  user: UserState;
}

export const reducers: ActionReducerMap<RootState> = {
  user: userReducer,
};

export const initialRootState: RootState = {
  user,
};

export const effects = [UserEffects];
