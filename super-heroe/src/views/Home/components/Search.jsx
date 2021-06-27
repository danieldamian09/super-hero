import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import apiCall from '../../../api';
import Mesage from './Mesage';

export default function Search({ agregarHero }) {

    const [errorForm, setErrorForm] = useState(false);
    const [errorResult, setErrorResult] = useState(false)
    
    const getHeroes = async (hero) => {
            try {
                const apiKey = `10225291220969322`
                const heroesResult = await apiCall({ url: `https://www.superheroapi.com/api.php/${apiKey}/search/${hero}` })
                agregarHero(heroesResult.results[0])
            } catch (error) {
                console.log(error)
                if(error){
                    setErrorResult(true)
                }
            }
        }

    return (
        <div>
            <Formik
                initialValues={{
                    hero: '',
                }}
                onSubmit={(values, { resetForm }) => {
                    const { hero } = values;
                    if(hero.trim() === ""){
                        setErrorForm(true)
                        return
                    }
                    setErrorForm(false)
                    getHeroes(values.hero)
                    setErrorResult(false)
                    resetForm();

                }}
                
            >
                <Form>
                    {errorForm ? <Mesage text="Por favor colocar un nombre" /> : null}
                    {errorResult ? <Mesage text="lo sentimos no hay resultados" /> : null}

                    <div className="container search-box col-lg-6 col-md-12">
                            <label htmlFor="hero" className="form-label"></label>
                        <Field
                            className="form-control"
                            id="hero"
                            name="hero"
                            placeholder="colocar el nombre del super heroe"
                            type="text"
                        />
                        <button type="submit"className="btn btn-primary mt-3" >Buscar</button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}
