import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import './styles.scss'
import TabSubtaskCommAct from './TabSubtaskCommAct/TabSubtaskCommAct';

const SubtaskCommentActivity = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggleTask = () => {
    //   alert(120)
    setModal(!modal);
  }

  return (
    <div id="subtask-comment-activity">
      <span  
          style={{color:"gray"}} 
          href="#" 
          onClick={toggleTask}
          >
          <i className="tim-icons icon-alert-circle-exc" onClick={toggleTask}></i>
      </span>
      <Modal isOpen={modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
        toggle={toggleTask} className={className}>
        <ModalHeader toggle={toggleTask}>Modal title</ModalHeader>
        <ModalBody>
            <TabSubtaskCommAct/>
        </ModalBody>
       
      </Modal>
    </div>
  );
}

export default SubtaskCommentActivity;