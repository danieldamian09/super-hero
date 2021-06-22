import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import apiCall from '../../../api';

export default function Search({ agregarHeros, agregarHero }) {

    const [errorForm, setErrorForm] = useState(false);
    
    const getHeroes = async (hero) => {
            try {
                const apiKey = `10225291220969322`
                const heroesResult = await apiCall({ url: `https://www.superheroapi.com/api.php/${apiKey}/search/${hero}` })
                agregarHeros(heroesResult)
                agregarHero(heroesResult.results[0])
            } catch (error) {
                console.log(error)
            }
        }

    return (
        <div>
            <Formik
                initialValues={{
                    hero: '',
                }}
                onSubmit={(values) => {
                    const { hero } = values;
                    if(hero.trim() === ""){
                        setErrorForm(true)
                        return
                    }
                    setErrorForm(false)
                    getHeroes(values.hero)
                }}
            >
                <Form>
                    {errorForm ? <p>Por favor colocar un nombre</p>: null}
                    <div className="container search-box">
                            <label htmlFor="hero" className="form-label"></label>
                        <Field
                            className="form-control"
                            id="hero"
                            name="hero"
                            placeholder="colocar el nombre del super heroe"
                            type="text"
                        />
                        <button type="submit"className="btn btn-primary mt-3">Buscar</button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}
