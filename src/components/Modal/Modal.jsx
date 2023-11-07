import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { createPortal } from 'react-dom';

// components
import { Button } from '../UI/Button';
import { Close } from '../../icons';

// styles
import './Modal.scss';

// eslint-disable-next-line react/display-name
export const Modal = forwardRef(({ title, children }, ref) => {
  const [chowModal, setShowModal] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => {
      document.body.style.overflow = 'hidden';
      setShowModal(true);
    },
    close: closeModal,
  }));

  function closeModal() {
    document.body.style.overflow = 'auto';
    setShowModal(false);
  }

  return (
    chowModal &&
    createPortal(
      <>
        <div className="modal-mask" onClick={closeModal} />
        <div className="modal">
          <div className="modal-header">
            <Button variant="icon" onClick={closeModal}>
              <Close />
            </Button>
          </div>
          <h2 className="modal__title">{title}</h2>
          <div className="modal-content">{children}</div>
        </div>
      </>,
      document.body,
    )
  );
});
