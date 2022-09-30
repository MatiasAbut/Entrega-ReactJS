import React from 'react';

const Contacto = () => {
    
    return (
        <>
        <main>
                    <section class="mb-4">
            <h2 class="h1-responsive font-weight-bold text-center my-4">Contactanos</h2>
            <p class="text-center w-responsive mx-auto mb-5">¿Tiene usted alguna pregunta? Por favor, no dude en
                contactarnos directamente. Nuestro equipo se comunicará contigo en cuestión de horas para ayudarte.</p>
            <div class="row">
                <div class="col-md-9 mb-md-0 mb-5">
                    <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="md-form mb-0">
                                    <input type="text" id="name" name="name" class="form-control"/>
                                    <label for="name" class="">Su nombre</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="md-form mb-0">
                                    <input type="text" id="email" name="email" class="form-control"/>
                                    <label for="email" class="">Email</label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="md-form mb-0">
                                    <input type="text" id="subject" name="subject" class="form-control"/>
                                    <label for="subject" class="">Tema</label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">

                                <div class="md-form">
                                    <textarea type="text" id="message" name="message" rows="2"
                                        class="form-control md-textarea"></textarea>
                                    <label for="message">Mensaje</label>
                                </div>

                            </div>
                        </div>
                    </form>
                    <div class="text-center text-md-left">
                        <a class="btn btn-primary"
                            onclick="botonEnviar()">Enviar</a>
                    </div>
                    <div class="status"></div>
                </div>
                <div class="col-md-3 text-center">
                    <ul class="list-unstyled mb-0">
                        <li><i class="fas fa-map-marker-alt fa-2x"></i>
                            <p>Tres Arroyos, Buenos Aires, Argentina.</p>
                        </li>

                        <li><i class="fas fa-phone mt-4 fa-2x"></i>
                            <p>+54-2983-525836</p>
                        </li>

                        <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                            <p>candyshop.contact@gmail.com</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        </main>
        
        </>
    );
}

export default Contacto;
