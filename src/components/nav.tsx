import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  return <Link to={'/'}>Dashboard</Link>;
};

export default Nav;
