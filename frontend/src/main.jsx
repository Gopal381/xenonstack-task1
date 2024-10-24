import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { ToastContainer } from "react-toastify";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./Home/Home.jsx";
import SignIn from "./Pages/SignIn.jsx";
import SignUp from "./Pages/SignUp.jsx";
import Visits from "./Pages/visits.jsx"
import { Provider } from "react-redux";
import store from "./Redux/App/store.js";
import { ConfirmProvider } from "material-ui-confirm";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="visits" element={<Visits />} />
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <>
    <ToastContainer
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition="Bounce"
    />
    <Provider store={store}>
      <ConfirmProvider
        defaultOptions={{
          confirmationButtonProps: { autoFocus: true },
        }}
      >
        <RouterProvider router={router} />
      </ConfirmProvider>
    </Provider>
  </>
);
