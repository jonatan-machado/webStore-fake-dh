import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Table } from 'reactstrap';

import image1 from '../../assets/images/Bitmap-1.svg'

const ModalExample = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);


  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>4 Items In your Cart</ModalHeader>
        <ModalBody>
          <Table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Size</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <th><img src={image1} /><br/>x remove</th>
                <th>XXL</th>
                <th>-2+</th>
                <th>$49</th>
              </tr>
            </tbody>
          </Table>
          
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Checkout</Button>{' '}
          <Button color="secondary" onClick={toggle}>Back to Shop</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;
