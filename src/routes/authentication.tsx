/* eslint-disable react/jsx-no-useless-fragment */
import React from "react";
import { Navigate } from "react-router-dom";
import { CONSTANT_ROUTE } from "utils/constants";
import { baseSlug } from "utils/functions";
import Loading from "components/atoms/Loading";
import { getLocalStorage, removeAccessToken } from "services/common/storage";

// import { useAppDispatch, useAppSelector } from "store/hooks";
// import authProfileAsync from "store/auth/thunk";

interface RedirectRouteProps {
  children: React.ReactNode;
}

export const PrivateRoute: React.FC<RedirectRouteProps> = ({ children }) => {
  // const dispatch = useAppDispatch();
  // const { isAuth, loading } = useAppSelector((state) => state.auth);
  const isAuth = true; // TODO: DELETE LATER
  const loading = false; // TODO: DELETE LATER

  // useEffect(() => {
  //   dispatch(authProfileAsync());
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  if (loading) return <Loading fullScreen />;

  if (!isAuth && !loading) {
    removeAccessToken();
    return <Navigate to={baseSlug(CONSTANT_ROUTE.VI.LOGIN, true)} />;
  }

  return <>{children}</>;
};

export const PrivateAuthRoute: React.FC<RedirectRouteProps> = ({ children }) => {
  // const { isAuth } = useAppSelector((state) => state.auth);
  const isAuth = true; // TODO: DELETE LATER

  const token = getLocalStorage("token");

  if (isAuth && token) return <Navigate to={baseSlug(CONSTANT_ROUTE.VI.HOME)} />;
  return <>{children}</>;
};
