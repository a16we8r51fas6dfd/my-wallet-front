import { Link, useNavigate} from "react-router-dom"
import { useContext, useState } from "react"
import { Context } from "../../context/authContext.js"
import axios from "axios"
import styled from 'styled-components'
import logo from '../../assets/logo.png'


export default function SignIn() {
    const [loginData, setloginData] = useState({
        email:'',
        password:''
    })
    const { setUserData, setToken, token } = useContext(Context)

    const navigate = useNavigate()

    async function handleSubmit(event) {
        event.preventDefault()

        try {
            const post = await axios.post('http://localhost:5000/sign-in', loginData)
            
            setToken(post.data.token)
            console.log(post.data)
            setUserData({name: post.data.name})
            console.log(token)

            navigate('/home')
        } catch (error) {
            alert(error)
        }
    }

    return(
        <Container>
            <img src={logo} alt="my wallet" />
            <Form>
                <input
                    value={loginData.email}
                    type="email"
                    placeholder="E-mail"
                    onChange={(e) => setloginData({...loginData, email:e.target.value})}
                />
                <input
                    value={loginData.password}
                    type="password"
                    placeholder="Senha"
                    onChange={(e) => setloginData({...loginData, password:e.target.value})}
                />
                <button onClick={handleSubmit} type="submit">
                    Entrar
                </button>
            </Form>
            <Link to='/sign-up'>
                <p>Primeira vez? Cadastre-se</p>
            </Link>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: #8C11BE;

    img {
        padding-bottom: 36px;
    }

    padding-left: 24px;
    padding-right: 24px;

    p {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: bold;
        font-size: 15px;
        line-height: 18px;
        text-decoration: none;

        color: #FFFFFF;
    }
`

const Form = styled.form`
    width: 100%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 13px;

    input {
        width: 100%;
        height: 58px;
        left: 25px;
        top: 233px;
        
        padding-left: 15px;

        background: #FFFFFF;
        border-radius: 5px;
        border: none;

        font-family: 'Raleway';
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 23px;

        color: #000000;
    }

    button {
        width: 100%;
        height: 46px;
        left: 23px;
        top: 375px;

        background: #A328D6;
        border-radius: 5px;
        border: none;


        font-family: 'Raleway';
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 23px;

        color: #FFFFFF;
    }

    padding-bottom: 36px;
`