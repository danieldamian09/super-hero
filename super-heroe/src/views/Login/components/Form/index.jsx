import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export default function FormHero() {

    const history = useHistory();

    const [user, setUser] = useState({
        email:"",
        password:""
    });

    const [errorForm, setErrorForm] = useState(false);
    const [mesageError, setMesageError] = useState("");

    const { email, password} = user;

    const handleSubmit = (e) => {
        e.preventDefault();
        // validar formulario
    };

    const handleInput = (e) => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        });
    };

    const handleButton = () => {
        let url = "http://challenge-react.alkemy.org/";
        axios.post(url, user)
        .then(response => {
            if(response.status === 200){
                localStorage.setItem("token", response.data.token)
                history.push("/home")
            }else{
                setErrorForm(true);
                setMesageError("Usuario y contraseña Incorrecta")
            }
        }).catch(error  => {
            setErrorForm(true);
            setMesageError("no hay conexion a la api")
            console.log(error)
        });
    };

    return (
        <div className="container col-lg-4">
            <form onSubmit={handleSubmit}>

                {errorForm ? <p>{mesageError}</p> : null}
                
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" value={email} onChange={handleInput} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Clave</label>
                    <input type="password" className="form-control" name="password" value={password} onChange={handleInput} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleButton} >Submit</button>
            </form>
        </div>
    )
}
