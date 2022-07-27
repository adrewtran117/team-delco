import { Link, useMatch, useResolvedPath } from "react-router-dom"
import logo from './HumanityWithUs2.png';



export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
      <img src={logo} height="100px" height="70"></img>
      </Link>
      <ul>
        <CustomLink to="/about"><text style={{fontFamily: 'Tahoma'}}><b>ABOUT</b></text></CustomLink>
        <CustomLink to="/spatial"><text style={{fontFamily: 'Tahoma'}}><b>EXPLORATION</b></text></CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
