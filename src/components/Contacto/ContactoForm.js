import React from 'react';

const ContactoForm = (props) => {
    return(
<div class="d-flex justify-content-center">
    <div class="col-lg-4 col-sm-6">
        <form>
            <div class="form-group">
                <input class="form-control mt-3" type="text" placeholder="Nombre"></input>
            </div>
            <div class="form-group">
                <input class="form-control" type="text" placeholder="Apellido"></input>
            </div>
            <div class="form-group">
                <input class="form-control" type="email" placeholder="Telefono"></input>
            </div>
            <div class="form-group">
                <input class="form-control" type="text" placeholder="Email"></input>
            </div>
            <div class="form-group">
                <input class="form-control" type="text" placeholder="Asunto"></input>
            </div>
            <div class="form-group">
                <textarea class="form-control" id="" rows="4" placeholder="Deja tu mensaje aqui"></textarea>
            </div>
            <div class="d-flex justify-content-center m-4">
                <button type="submit" class="btn btn-success">Enviar</button>
            </div>
        </form>
    </div>
</div>
    )
}

export default ContactoForm;