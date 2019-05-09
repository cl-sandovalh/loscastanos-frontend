import React from 'react';

const RegistroForm = (props) => {
  return (
    <div className="row justify-content-md-center">
      <div className="col-md-10">
        <form onSubmit={props.submit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Nombre</label>
              <input type="text" onChange={props.change} name="name" className="form-control" placeholder="Nombre" required/>
            </div>
            <div className="form-group col-md-6">
              <label>Apellido</label>
              <input type="text" onChange={props.change} name="last_name" className="form-control" placeholder="Apellido" required/>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Email</label>
              <input type="email" onChange={props.change} name="email" className="form-control" placeholder="Email" required/>
            </div>
            <div className="form-group col-md-6">
              <label>Confirmar email</label>
              <input type="email" onChange={props.change} name="email_confirmation" className="form-control" placeholder="Email" required/>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Contraseña</label>
              <input type="password" onChange={props.change} name="password" className="form-control" placeholder="Contraseña" required/>
            </div>
            <div className="form-group col-md-6">
              <label>Confirmar contraseña</label>
              <input type="password" onChange={props.change} name="password_confirmation" className="form-control" placeholder="Contraseña" required/>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Teléfono</label>
              <input type="number" onChange={props.change} name="phone_number" className="form-control" placeholder="Teléfono" required/>
            </div>
            <div className="form-group col-md-6">
              <label>Ciudad</label>
              <input type="text" onChange={props.change} name="city" className="form-control" placeholder="Ciudad" required/>
            </div>
          </div>
          <div className="form-group">
            <label>Dirección</label>
            <input type="text" onChange={props.change} name="address" className="form-control" placeholder="Dirección" required/>
          </div>
          <div className="form-group text-center">
            <button type="submit" className="btn btn-success">Registrarme</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegistroForm;