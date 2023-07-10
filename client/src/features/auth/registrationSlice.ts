import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState, AppThunk } from "../../app/store"
import { axiosInstance } from "../../utils/axiosInstance"
import { IFormRegistation } from "../../interfaces/auth"
import { notify } from "../../utils/notify"
import toast from "react-hot-toast"

export const fetchRegistation = createAsyncThunk(
  "auth/fetchRegistation",
  async (
    { username, email, fullName, password }: IFormRegistation,
    { dispatch, rejectWithValue },
  ) => {
    try {
      const { data } = await axiosInstance({
        method: "POST",
        url: "/auth/registration",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          username,
          email,
          fullName,
          password,
        },
      })

      notify(data.message)

      return data
    } catch (error) {
      notify("Error")
      console.log(error)

      // return rejectWithValue(error)
    }
  },
)

interface IRegistrationSlice {
  isLoading: boolean
  error: null | string
  status: "success" | "rejected"
}

const initialState: IRegistrationSlice = {
  isLoading: false,
  error: null,
  status: "rejected",
}

const registrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRegistation.fulfilled, (state, action) => {
      state.isLoading = false
      state.status = "success"
    })
    builder.addCase(fetchRegistation.rejected, (state, action) => {
      state.isLoading = false
      state.error = "error"
    })
    builder.addCase(fetchRegistation.pending, (state, action) => {
      state.isLoading = true
      state.error = null
    })
  },
})

export const registationReducer = registrationSlice.reducer
