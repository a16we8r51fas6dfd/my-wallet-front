import { useNavigate} from "react-router-dom"
import { useContext, useState } from "react"
import { Context } from "../../context/authContext.js"
import axios from "axios"
import styled from 'styled-components'
import dayjs from "dayjs"

dayjs().format()

export default function NovaEntrada() {

    const { token } = useContext(Context)
    const [ entry, setEntry ] = useState({
        value:'',
        description:'',
        date: dayjs().format('DD/MM'),
        type: 'entry',
    })

    const navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault()

        console.log(token)

        const promisse = axios.post('https://git.heroku.com/my-walet-back.git/new-entry', entry, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })

        promisse.then(response => {
            navigate('/home')
        })
        promisse.catch(() => alert('algo deu errado'))
    }
    
    return(
        <Container>
            <Header>
                <p>Nova entrada</p>
            </Header>

            <Form>
                <input 
                    value={entry.value}
                    type="text" 
                    placeholder="Valor"
                    onChange={(e) => setEntry({...entry, value:e.target.value})}
                />
                <input 
                    value={entry.description}
                    type="text" 
                    placeholder="Descrição"
                    onChange={(e) => setEntry({...entry, description:e.target.value})}
                />
                <button onClick={handleSubmit}>
                    Salvar entrada
                </button>
            </Form>

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

    padding-left: 24px;
    padding-right: 24px;
`

const Header = styled.div`
    width: calc(100% - 48px);
    height: 78px;

    position: fixed;
    top: 0;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    p {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: bold;
        font-size: 26px;
        line-height: 31px;
        text-decoration: none;

        color: #FFFFFF;
    }
`

const Form = styled.form`
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    gap: 13px;

    input {
        width: 100%;
        height: 58px;
        left: 25px;
        top: 96px;

        background: #FFFFFF;
        border-radius: 5px;
        border: none;

        padding-left: 15px;
        
        font-family: 'Raleway';
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 23px;

        color: #000000;
    }

    button{
        width: 100%;
        height: 46px;
        left: 25px;
        top: 238px;

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
`