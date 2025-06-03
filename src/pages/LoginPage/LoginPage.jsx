import { useSelector } from "react-redux";
import LoginForm from "../../components/LoginForm/LoginForm";
import {
  selectAuthError,
  selectIsRefreshing,
} from "../../redux/auth/selectors";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

export default function LoginPage() {
  const isRefreshing = useSelector(selectIsRefreshing);
  const error = useSelector(selectAuthError);
  return (
    <>
      <h1>Log in</h1>
      <LoginForm />
      {isRefreshing && <Loader />}
      {error && <ErrorMessage />}
    </>
  );
}
