import { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import { Navigate, Routes, Route, HashRouter } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "./Models";
import { AuthGuard } from "./Guards";
import store from "./Redux";
import LoadingApp from "./Utilities/LoadingApp";

const Login = lazy(() => import("./Pages/Login/Login"));
const Private = lazy(() => import("./Pages/Private/Private"));

function App() {
  return (
    <>
      <Suspense fallback={<LoadingApp />}>
        <Provider store={store()}>
          <HashRouter>
            <Routes>
              <Route
                path="/"
                element={<Navigate to={PrivateRoutes.PRIVATE} />}
              />
              <Route path={PublicRoutes.LOGIN} element={<Login />} />
              <Route element={<AuthGuard />}>
                <Route
                  path={`${PrivateRoutes.PRIVATE}/*`}
                  element={<Private />}
                />
              </Route>
            </Routes>
          </HashRouter>
        </Provider>
      </Suspense>
    </>
  );
}

export default App;
