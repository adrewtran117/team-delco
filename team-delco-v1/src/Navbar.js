import { Link, useMatch, useResolvedPath } from "react-router-dom"
import logo from './HumanityWithUS.png';



export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
      <img src={logo}></img>
      </Link>
      <ul>
        <CustomLink to="/about"><text style={{color:'#57BC90'}}>About</text></CustomLink>
        <CustomLink to="/spatial"><text style={{color:'#57BC90'}}>Exploration</text></CustomLink>
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
