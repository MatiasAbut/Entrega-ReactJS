import {useState, useEffect, useContext} from 'react';
import { DarkModeContext } from '../../context/darkModeContext'

const About = () => {
    const {darkMode, toggleDarkMode } = useContext(DarkModeContext)
    return (
        <>
        <div className='d-flex justify-content-center'>
                          <div className="elementor-widget-container">
                            <h3 className="elementor-heading-title d-flex justify-content-center">
                              18 Años en el mercado
                              mayorista
                            </h3>
              <div className="elementor-widget-container">
                <p className="elementor-heading-title ">
                  En los últimos años asistimos al crecimiento de comercio
                  en el rubro mayorista en Argentina. Siguiendo esta
                  tendencia creamos CandyShop como un punto de encuentro para
                  comerciantes, mayoristas y distribuidores de todo el país.
                </p>
              </div>
              </div>
              </div>
        </>
    );
}

export default About;
