export interface UserState {
  accessToken?: string;
  loading: boolean;
}

export const initialState: UserState = {
  accessToken: null,
  loading: false,
};
