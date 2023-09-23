import { useSelector } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
  const { userInfo } = useSelector((state) => state.auth)

  // show unauthorized screen if no user is found in redux store
  if (!userInfo) {
    return (
      <>
      <div className='header-status'>
        <span>  
          You're not logged in
        </span>
        <div className='cta'>
          <NavLink className='button' to='/login'>
            Login
          </NavLink>
        </div>
      </div>  
      <div className='unauthorized'>
        <h1>Unauthorized :(</h1>
        <div className="alert alert-primary" role="alert">
ALERT YOU ARE NOT LOGGED IN CURRENTLY <a href="#" class="alert-link"></a>. 
</div>
          <NavLink to='/login'>Login</NavLink> to gain access
          <div class="spinner-grow text-primary" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-secondary" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-success" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-danger" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-warning" role="status">
  
  <span className="visually-hidden">Loading...</span>
  </div>
        </div>
      </>

    )
  }

  return <Outlet />
}

export default ProtectedRoute
