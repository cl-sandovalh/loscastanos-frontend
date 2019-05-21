import React from 'react';

const ContactoForm = (props) => {
  return(
		<div className="row d-flex justify-content-center">
			<div className="col-md-4 col-lg-6">
				<form>
					<div className="form-group">
						<input className="form-control mt-3" type="text" placeholder="Nombre"></input>
					</div>
					<div className="form-group">
						<input className="form-control" type="text" placeholder="Apellido" />
					</div>
					<div className="form-group">
						<input className="form-control" type="email" placeholder="Telefono" />
					</div>
					<div className="form-group">
						<input className="form-control" type="text" placeholder="Email" />
					</div>
					<div className="form-group">
						<input className="form-control" type="text" placeholder="Asunto" />
					</div>
					<div className="form-group">
						<textarea className="form-control" rows="4" placeholder="Deja tu mensaje aqui" />
					</div>
					<div className="text-center m-2">
						<button type="submit" className="btn btn-success">Enviar</button>
					</div>
				</form>
			</div>
		</div>
  )
}

export default ContactoForm;