import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
import App from "./App"
import "./index.css"

import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { Layout } from "./layout/Layout"
import { HomePage } from "./pages/homePage/HomePage"
import { SignUp } from "./pages/siginUp/SignUp"
import { SignIn } from "./pages/signIn/SignIn"
import { ProfilePage } from "./pages/profilePage/ProfilePage"
import { Posts } from "./components/posts/Posts"
import { Reels } from "./components/reels/Reels"
import { Tagged } from "./components/tagged/Tagged"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ":profile",
        element: <ProfilePage />,
        children: [
          {
            index: true,
            element: <Posts />,
          },
          {
            path: "reels",
            element: <Reels />,
          },
          {
            path: "tagged",
            element: <Tagged />,
          },
        ],
      },
    ],
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
