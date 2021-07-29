const Login = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers())
  })
};

export default Login;
export {
  Login
}