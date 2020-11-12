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
    <div >
      <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      <Modal style={{minWidth:'90vw', }} isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>4 Items In your Cart</ModalHeader>
        <ModalBody>
          <Table>
            <thead>
              <tr style={{color:'#B4B4B4'}}>
                <th>Item</th>
                <th/>
                <th>Size</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr >
                <th scope="row"><img src={image1} alt="imagem"/></th>
                <th style={{color:"#2E2E2E"}} >Men BK3598<br/><p>x remove</p></th>
                <th style={{color:"#2E2E2E"}}>XXL</th>
                <th style={{color:"#2E2E2E"}}><button style={{borderRadius:'50px', marginRight:'10px'}}>-</button>2<button style={{borderRadius:'50px', marginLeft:'10px'}}>+</button></th>
                <th style={{color:"#2E2E2E"}}>$49</th>
              </tr>
            </tbody>
          </Table>
          
        </ModalBody>
        <ModalFooter style={{backgroundColor:"#EFEFEF", justifyContent:"space-between"}}>
          <Button style={{backgroundColor:"#FFF", color:"#F62F5E", borderRadius:"30px", border:'none'}} onClick={toggle}>Checkout</Button>{' '}
          <Button style={{backgroundColor:"#F62F5E", color:"#fff", borderRadius:"30px", border:'none'}}  onClick={toggle}>Back to Shop</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;
