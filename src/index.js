import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignIn from "./components/Sign-in/Sign-in";
import './styles/reset.css'
import './styles/style.css'


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/sign-in' element={<SignIn />}/>
                {/* <Route exact path='/sign-up'element={<Sign-up />}/> */}
            </Routes>
        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.querySelector('.root'))