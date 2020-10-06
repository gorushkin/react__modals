import React, { useEffect, useRef, useState } from 'react';
import _ from 'lodash';
import { useFormik } from 'formik';
import { Modal, FormGroup, FormControl } from 'react-bootstrap';

// BEGIN (write your solution here)
export default (show, handler) => {
  const handleClose = () => handler();

  return (
    <Modal show={show} className='modal-dialog'>
      <div className='modal-content'>
        <div className='modal-header'>
          <div className='modal-title h4'>Add</div>
          <button onClick={handleClose} className='close' type='button'>
            <span aria-hidden='true'>×</span>
            <span className='sr-only'>Close</span>
          </button>
        </div>
        <div className='modal-body'>
          <form>
            <FormGroup className='form-group'>
              <FormControl
                className='form-control'
                data-testid='input-body'
                name='body'
                required=''
              />
            </FormGroup>
            <input className='btn btn-primary' type='submit' value='submit' />
          </form>
        </div>
      </div>
    </Modal>
  );
};
// END
