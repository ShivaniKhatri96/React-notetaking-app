import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";

interface childProps {
  children: React.ReactNode;
}

const UnauthenticatedRoute = ({ children }: childProps) => {
  const token = useAppSelector((state) => state.auth.token);
  if (token !== null) {
    return <Navigate replace to="/" />;
  }
  return children;
};

export default UnauthenticatedRoute;
