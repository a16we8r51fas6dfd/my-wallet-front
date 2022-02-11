import { Link } from "react-router-dom"
import { useContext, useEffect } from "react"
import { Context } from "../../context/authContext.js"
import axios from "axios"
import styled from 'styled-components'
import { RiLogoutBoxRLine } from 'react-icons/ri'

export default function Home() {

    const { token, userData, transactions, setTransactions } = useContext(Context)

    function saldoCalc(array) {
        let saldo = 0
        for(let i = 0; i < array.length; i++) {
            if(array[i].type === "entry") {
                saldo = saldo + parseInt(array[i].value)
            } else {
                saldo = saldo - parseInt(array[i].value)
            }
        }
        return saldo
    }

    useEffect(() => {
        try {
            const promisse = axios.get(`${process.env.REACT_APP_API}/home`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })

            promisse.then(response => {
                console.log(response.data)
                setTransactions(response.data)
                
            })
        } catch (error) {
            alert(error)
        }
    }, [])

    return(
        <Container>
            <Header>
                <p>Olá, {userData.name}</p>
                <RiLogoutBoxRLine />
            </Header>

            <Content>
                {
                    transactions.length === 0 ?
                    'tem nada filho'
                :
                    transactions.map(transaction =>
                            <Transaction key={transaction._id}>
                                <Text>
                                    <span>{transaction.date}</span>
                                    <p>{transaction.description}</p>
                                </Text>
                                <Value>
                                    <span>{transaction.value}</span>
                                </Value>
                            </Transaction>
                    )
                }
                            <Saldo>
                                <p>SALDO</p>
                                <span>{saldoCalc(transactions)}</span>
                            </Saldo>
            </Content>

            <Footer>
                <Link to='nova-entrada'>
                    <button>Nova entrada</button>
                </Link>
                <Link to='nova-saida'>
                    <button>Nova saída</button>
                </Link>
            </Footer>
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

const Transaction = styled.div`
    width: 100%;
    height: 20px

    span{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;

        color: #C6C6C6;
    }

    p{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;

        color: #000000;
    }

    display: flex;
`

const Text = styled.div`
    width: 80%;

    display: flex;
    align-items: center;
    justify-content: left;
    gap: 10px;
`

const Value = styled.div`
    width: 20%;

    display: flex;
    align-items: center;
    justify-content: right;
`

const Saldo = styled.div`
    width: 100%;
    height: 40px;

    display: flex;
    justify-content: space-between;

    p{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: bold;
        font-size: 17px;
        line-height: 20px;

        color: #000000;
    }

    span{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: normal;
        font-size: 17px;
        line-height: 20px;
        text-align: right;

        color: #03AC00;
    }
`

const Header = styled.div`
    width: calc(100% - 48px);
    height: 78px;

    position: fixed;
    top: 0;

    display: flex;
    justify-content: space-between;
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

const Content = styled.div`
    width: calc(100% - 48px);
    height: calc(100% - 143px - 78px);

    position: fixed;
    top: 78px;
    
    background-color: #FFFFFF;

    border-radius: 5px;

    padding-top: 23px;
    padding-left: 12px;
    padding-right: 12px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    font-family: 'Raleway';
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    text-align: center;

    color: #868686;
`

const Footer = styled.div`
    width: calc(100% - 48px);
    height: 143px;

    position: fixed;
    bottom: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
        width: 155px;
        height: 114px;

        background: #A328D6;
        border-radius: 5px;
        border: none;

        font-family: 'Raleway';
        font-style: normal;
        font-weight: bold;
        font-size: 17px;
        line-height: 20px;

        color: #FFFFFF;
    }
`