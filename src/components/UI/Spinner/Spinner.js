import React from 'react';

const Spinner = (props) => {
  return (
    <div className="d-flex justify-content-center my-5 py-5">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}

export default Spinner;