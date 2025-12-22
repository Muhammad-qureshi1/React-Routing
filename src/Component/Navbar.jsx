import { NavLink, Outlet } from 'react-router';
export default function Navbar() {
  return (
    <>
    <nav>
     <NavLink to="/"><img src="https://i.ytimg.com/vi/HZKkPSQPHVA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCO1F-IE4ttX9ODbS1RRrqxq9MLhw" alt="logo" /></NavLink>
      <ul>
        <NavLink to="/"><li>Home</li></NavLink> 
        <NavLink to="/about"><li>About</li></NavLink>
        <NavLink to="/product"><li>Product</li></NavLink>
      </ul>
    </nav>

    <Outlet />
    </>
  )
}
