import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import UsersService from '../../services/UsersService';
import { GlobalContext } from '../../context/GlobalStorage';
import { LoginMidContainer } from './LoginMid.style';

type Props = {}

function LoginMid({}: Props) {

     const urlParams = useParams();
     const { setLoggedUser } = useContext(GlobalContext);

     useEffect(()  => {
        const fetchData = async () => {
            const user =  await UsersService.getUserById(Number(urlParams.id));
            setLoggedUser(user);
            window.localStorage.setItem("loggedUser", JSON.stringify(user));
            window.location.href = `http://localhost:5000/home`;
        };
        fetchData();
        
    }, []);

    return (
        <LoginMidContainer>
            <div className='loader'></div>
        </LoginMidContainer>
    )
}

export default LoginMid