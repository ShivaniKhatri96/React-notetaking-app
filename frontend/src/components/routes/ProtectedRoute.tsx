import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";

interface childProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: childProps) => {
  const token = useAppSelector((state) => state.auth.token);
  //go to the element only if user is loggedIn
  if (token === null) {
    return <Navigate replace to="/welcome" />;
  }
  return children;
};

export default ProtectedRoute;
