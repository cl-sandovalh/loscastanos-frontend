import React from 'react';

const IngresarForm = (props) => {
  return (
    <div className="row justify-content-md-center">
      <div className="col-md-4">
        <form className="mt-5 mx-auto" onSubmit={props.loginSubmit}>
          <div className="form-group">
            <input type="email" value={props.email} onChange={props.emailChange} className="form-control" aria-describedby="email" placeholder="Email" required/>
          </div>
          <div className="form-group">
            <input type="password" value={props.password} onChange={props.passwordChange} className="form-control" placeholder="Contraseña" required/>
          </div>
          <div className="form-group text-center">
            <button type="submit" className="btn btn-success">Ingresar</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default IngresarForm;
