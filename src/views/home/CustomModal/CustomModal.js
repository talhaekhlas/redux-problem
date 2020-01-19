import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Tooltip } from 'reactstrap';
import TabPaneCustom from './TabPaneCustom'

const CustomModal = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  // for tooltip

  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggleTooltip = () => setTooltipOpen(!tooltipOpen);

  return (
    <div>
      
      <p>
        <span 
          style={{color:"gray"}} 
          href="#" id="TooltipExample">
          <i className="fas fa-comment comment" onClick={toggle}></i>
        </span>
      </p>
      <Tooltip 
        placement="right" 
        isOpen={tooltipOpen}
        target="TooltipExample" 
        toggle={toggleTooltip}
        style={{background:'#0A2D48',color:'white'}}
        >
        Comments
      </Tooltip>
     
      
      <Modal 
         isOpen={modal} 
         modalTransition={{ timeout: 700 }} 
         backdropTransition={{ timeout: 1300 }}
         toggle={toggle} className={className}
         size='lg'
        >
        <ModalHeader toggle={toggle}>Comment Section</ModalHeader>
        
        <ModalBody>
          <TabPaneCustom/>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default CustomModal;


