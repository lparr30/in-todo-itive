import './Login.css'
import squiggle from '../../assets/squiggle.png'
import Dot from './Dot'

const Login = () => {return(
    <div className="login">
        <div className='login-welcome'>
            {/* <h1>In<i>todo</i>itive</h1> */}
            <div id='in-todo-itive'>
                <h1>In<span className='dot'>•</span><i>todo</i><span className='dot'>•</span>itive</h1>
                {/* <div id='todo'>
                    <Dot />
                    <h1><i>todo</i></h1>
                    <Dot />
                </div>
                <h1>itive</h1> */}
            </div>
            <h3>An app designed with <i>you</i> in mind.</h3>
            <h3>Carpe Diem</h3>
        </div>
        <img id='squiggle' src={squiggle} alt="squiggle" />
    </div>
)}

export default Login;
