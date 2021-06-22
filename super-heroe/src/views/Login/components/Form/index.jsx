import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';

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
        <div className="container col-lg-4">
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
                <Form>
                    {errorForm ? <p>{mesageError}</p> : null}
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <Field
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="jane@acme.com"
                            type="email"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Password</label>
                        <Field
                            className="form-control"
                            id="password"
                            name="password"
                            placeholder="constraseña"
                            type="password"
                        />
                    </div>
                    <button type="submit"className="btn btn-primary">Enviar</button>
                </Form>
            </Formik>
        </div>
    )
}
