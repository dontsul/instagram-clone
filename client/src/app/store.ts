import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import { registationReducer } from "../features/auth/registrationSlice"

export const store = configureStore({
  reducer: { registation: registationReducer },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
