import React from 'react';
import { Modal, FormGroup } from 'react-bootstrap';

// BEGIN (write your solution here)
export default (show, handler, action) => {
  const handleClose = () => handler();

  return (
    <Modal show={show} className='modal-dialog'>
      <div className='modal-content'>
        <div className='modal-header'>
          <div className='modal-title h4'>Remove</div>
          <button onClick={handleClose} className='close' type='button'>
            <span aria-hidden='true'>×</span>
            <span className='sr-only'>Close</span>
          </button>
        </div>
        <div className='modal-body'>
          <form onSubmit={action}>
            <div className='form-group'>
              <input className='btn btn-danger' type='submit' value='remove' />
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};
// END
