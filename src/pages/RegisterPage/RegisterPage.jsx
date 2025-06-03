import { useSelector } from "react-redux";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import {
  selectAuthError,
  selectIsRefreshing,
} from "../../redux/auth/selectors";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

export default function RegisterPage() {
  const isRefreshing = useSelector(selectIsRefreshing);
  const error = useSelector(selectAuthError);
  return (
    <>
      <h1>Sign up</h1>
      <RegisterForm />
      {isRefreshing && <Loader />}
      {error && <ErrorMessage />}
    </>
  );
}
