import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import Mesage from '../../../Home/components/Mesage';

export default function FormHero() {

    const history = useHistory();

    const [errorForm, setErrorForm] = useState(false);
    const [mesageError, setMesageError] = useState("");


    const handleButton = (values) => {
        let url = "http://challenge-react.alkemy.org/";
        axios.post(url, values)
        .then(response => {
            if(response.status === 200){
                localStorage.setItem("token", response.data.token)
                history.push("/home")
            }else{
                setErrorForm(true);
                setMesageError("Todos los campos son obligatorios")
            }
        }).catch(error  => {
            setErrorForm(true);
            setMesageError("Todos los campos son obligatorios")
            console.log(error)
        });
    };

    return (
        <div className="container col-lg-4 mt-5 ">
            <h1>Iniciar Sesión</h1>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                onSubmit={values => {
                    const { email, password } = values;
                    if(email.trimEnd() === '' || password.trim() === ''){
                        setErrorForm(true)
                    }
                    handleButton(values)
                }}
            >
                <Form className="border-dark">
                    {errorForm ? <Mesage text={mesageError} /> : null}
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label text-light">Email</label>
                        <Field
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="challenge@alkemy.org"
                            type="email"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label text-light">Password</label>
                        <Field
                            className="form-control"
                            id="password"
                            name="password"
                            placeholder="constraseña"
                            type="password"
                        />
                    </div>
                    <div class="d-grid gap-2">
                    <button type="submit"className="btn btn-primary">Enviar</button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}
