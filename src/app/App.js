import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '../styles/index.scss';
// import Footer from './components/Footer';
import Login from './pages/auth/Login';
import Home from './pages/Home';
import Messaging from './pages/Messaging';
import Public from './pages/Public';
import University from './pages/University';
import Groups from './pages/Groups';
import ForgetPwd from './pages/auth/ForgetPwd';
import SignUp_1 from './pages/auth/signup/SignUp_1';
import SignUp_2 from './pages/auth/signup/SignUp_2';
import SignUp_3_Email from './pages/auth/signup/SignUp_3_Email';
import SignUp_3_phoneNumber from './pages/auth/signup/SignUp_3_phoneNumber';
import SignUp_3_code from './pages/auth/signup/SignUp_3_code';
import SignUp_4 from './pages/auth/signup/SignUp_4';

const App = () => {
  // const [dark, setDark] = useState(false);
  // const handleDark = () => {
  //   if(!dark) {
  //     setDark(true)
  //   } else {
  //       setDark(false)
  //   }
  // }
  return (
    <Router>
      <Switch>

          {/* Pages */}
        <Route path="/" exact component={Home} />
        <Route path="/university" component={University} />
        <Route path="/public" component={Public} />
        <Route path="/groups" component={Groups} />
        <Route path="/message" component={Messaging} />

          {/* Auth */}
        <Route path="/login" component={Login} />
        <Route path="/signup/1" component={SignUp_1} />
        <Route path="/signup/2" component={SignUp_2} />
        <Route path="/signup/3/phone" component={SignUp_3_phoneNumber} />
        <Route path="/signup/3/email" component={SignUp_3_Email} />
        <Route path="/signup/3/code" component={SignUp_3_code} />
        <Route path="/signup/4" component={SignUp_4} />
        <Route path="/forgetpwd" component={ForgetPwd} />
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;

