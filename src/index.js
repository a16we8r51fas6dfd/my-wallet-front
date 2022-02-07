import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignIn from "./components/Sign-in/Sign-in";
import SignUp from './components/Sign-up/SignUp';
import './styles/reset.css'
import './styles/style.css'
import { AuthProvider } from './context/authContext.js';
import Home from './components/Home/Home.js';
import NovaEntrada from './components/Home/NovaEntrada.js';
import NovaSaida from './components/Home/NovaSaida';


function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<SignIn />} />
                    <Route exact path='/sign-up'element={<SignUp />} />
                    <Route exact path="/home" element={<Home />} />
                    <Route exact path='/home/nova-entrada' element={<NovaEntrada />} />
                    <Route exact path='/home/nova-saida' element={<NovaSaida />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}

ReactDOM.render(<App />, document.querySelector('.root'))