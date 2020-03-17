import React, { useState, useReducer } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

import FormBox from '../components/FormBox'

const Start = ({ setFormState }) => {
  const history = useHistory()
  const clickHandler = feeling => {
    setFormState({ generalHealth: feeling })
    history.push('/report')
  }
  return (
    <FormBox>
      <section className="fdb-block">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 text-center">
              <h1>Antes de empezar</h1>
              <p className="lead">
                Esta herramienta es utilizada meramente con fines informativos.
                No provee una asesoría médica. No la uses para reemplazar a una
                consulta, diagnóstico o tratamiento con un profesional.
              </p>
              <p>
                Al continuar, usted está de acuerdo con nuestros &nbsp;
                <Link to="/legal" target="_blank">
                  términos de servicio
                </Link>
              </p>
              <hr className="mb-5 mt-5" />
              <h3 className="pb-4">
                En general, ¿Cómo te sentís en este momento?
              </h3>
              <p className="mt-5 mt-sm-4">
                <button
                  className="btn btn-lg btn-success"
                  onClick={() => clickHandler('good')}
                >
                  <i
                    className="fas fa-smile-beam"
                    style={{ paddingRight: 10 }}
                  />
                  Bien
                </button>

                <button
                  className="btn btn-lg btn-danger ml-5"
                  onClick={() => clickHandler('bad')}
                >
                  <i
                    className="fas fa-frown-open"
                    style={{ paddingRight: 10 }}
                  />
                  Mal
                </button>
              </p>
            </div>
          </div>
          <div className="text-center">
            <button
              className="btn btn-link ml-4"
              onClick={() => clickHandler('testing')}
            >
              Sólo estoy probando la aplicación
            </button>
          </div>
          <div className="row pt-5 pb-3">
            <div className="col-12 text-center"></div>
          </div>
        </div>
      </section>
    </FormBox>
  )
}

export default Start
