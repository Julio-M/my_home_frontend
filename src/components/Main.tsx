import Login from './UserAuth/Login'
import Signup from './UserAuth/Signup'
const Main: React.FC = () => {

    return (
        <>
            <div>
                <h2>Login</h2>
                <Login />
            </div>
            <div>
               <h2>Signup</h2>
                <Signup />
            </div>
        </>
    )
}

export default Main