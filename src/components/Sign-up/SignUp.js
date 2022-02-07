import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import styled from 'styled-components'
import { useState } from "react"
import logo from '../../assets/logo.png'


export default function SignUp() {
    const [userData, setUserData] = useState({
        name:'',
        email:'',
        password:'',
        confirmPassword: ''
    })

    const navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault()

        if(userData.password !== userData.confirmPassword) {
            alert('the password confirmation does not match')
            return
        }

        delete userData.confirmPassword

        try {
            axios.post('http://localhost:5000/sign-up', userData)
            
            navigate('/sign-in')
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <Container>
            <img src={logo} alt="my wallet" />
            <Form>
                <input
                    value={userData.name}
                    type="name"
                    placeholder="Nome"
                    onChange={(e) => setUserData({...userData, name:e.target.value})}
                />
                <input
                    value={userData.email}
                    type="email"
                    placeholder="E-mail"
                    onChange={(e) => setUserData({...userData, email:e.target.value})}
                />
                <input
                    value={userData.password}
                    type="password"
                    placeholder="Senha"
                    onChange={(e) => setUserData({...userData, password:e.target.value})}
                />
                <input
                    value={userData.confirmPassword}
                    type="password"
                    placeholder="Comfirme a senha"
                    onChange={(e) => setUserData({...userData, confirmPassword:e.target.value})}
                />
                <button onClick={handleSubmit} type="submit">
                    Cadastrar
                </button>
            </Form>
            <Link to='/sign-in'>
                <p>Já tem uma conta? Entre agora!</p>
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