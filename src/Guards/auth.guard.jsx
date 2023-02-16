import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { PublicRoutes } from "../Models/routes";

export const AuthGuard = () => {
  const { sesion } = useSelector((store) => store);
  const { Tocken } = sesion;
  return Tocken ? <Outlet /> : <Navigate replace to={PublicRoutes.LOGIN} />;
};

export default AuthGuard;
