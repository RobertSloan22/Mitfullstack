import { useSelector } from 'react-redux'
import '../styles/profile.css'
import { Query } from 'mongoose'
// THIS PAGE MUST CONTAIN THE CODE FOR MAKING A DEPOSIT AND WITHDRAW FROM THE ACCOUNT



const ProfileScreen = () => {
  const { userInfo } = useSelector((state) => state.auth)


  return (
  <>
    <div>
      <figure>{userInfo?.firstName.charAt(0).toUpperCase()}</figure>
      <span>


            <div className="row">
        <div className="col">
          <input type="text" className="form-control" placeholder="Deposit Funds" aria-label="First name"/>
        </div>        <button className="btn btn-primary" type="submit">Button</button>

        <div className="col">

          <input type="text" className="form-control" placeholder="Withdraw Funds " aria-label="Last name"/>
        </div>
      </div>
        <button className="btn btn-primary" type="submit">Button</button>

        Welcome <strong>{userInfo?.firstName}!</strong> You can view this page
        because you're logged in
      </span>
    </div>
    </>
  )
}

export default ProfileScreen
