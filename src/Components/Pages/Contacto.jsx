import React from 'react';
import Swal from 'sweetalert2'

const Contacto = () => {
    


    const datosFormulario = React.useRef()

    const consultarForm = (e) => {
        e.preventDefault()
        
        console.log(datosFormulario)
        const datForm = new FormData(datosFormulario.current)
        console.log(Object.fromEntries(datForm))
        e.target.reset()
    }

    const botonEnviar= () =>{ 
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Su mensaje ha sido enviado!',
            showConfirmButton: false,
            timer: 1500
        })
        }





    
    return (
        <>
        <div >
    <section className="mb-4">
        <h2 className="h1-responsive font-weight-bold text-center my-4">
        Contactanos
        </h2>
        <p className="text-center w-responsive mx-auto mb-5">
        ¿Tiene usted alguna pregunta? Por favor, no dude en contactarnos
        directamente. Nuestro equipo se comunicará contigo en cuestión de horas
        para ayudarte.
        </p>
        <div className="row">
        <div className="col-md-9 mb-md-0 mb-5">
            <form
            onSubmit={consultarForm} ref={datosFormulario}>
            <div className="row">
                <div className="col-md-6">
                <div className="md-form mb-0">
                    <input
                    type="text"
                    name="nombre"
                    className="form-control"
                    />
                    <label htmlFor="name" className="form-label">
                    Su nombre
                    </label>
                </div>
                </div>
                <div className="col-md-6">
                <div className="md-form mb-0">
                    <input type="email" className="form-control" name="email"
                    />
                    <label htmlFor="email" className="form-label">
                    Email
                    </label>
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                <div className="md-form">
                    <textarea
                    name="consulta"
                    rows={2}
                    className="form-control md-textarea"
                    defaultValue={""}
                    />
                    <label htmlFor="message">Mensaje</label>
                </div>
                </div>
            </div>
            
            <div className="text-center text-md-left">
            <button type="submit" className="btn btn-primary" onClick={botonEnviar}>
                Enviar
            </button>
            </div>
            </form>
            <div className="status" />
        </div>
        <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
            <li>
                <i className="fas fa-map-marker-alt fa-2x" />
                <p>Tres Arroyos, Buenos Aires, Argentina.</p>
            </li>
            <li>
                <i className="fas fa-phone mt-4 fa-2x" />
                <p>+54-2983-525836</p>
            </li>
            <li>
                <i className="fas fa-envelope mt-4 fa-2x" />
                <p>candyshop.contact@gmail.com</p>
            </li>
            </ul>
        </div>
        </div>
    </section>
    </div>

        
        </>
    );
}

export default Contacto;
