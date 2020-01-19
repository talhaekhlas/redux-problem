import React, { Component, Fragment } from 'react';

import {
    CardTitle,
    Row,
    Col,
   
  } from "reactstrap";

  import './styles.scss'

class TaskList extends Component {
    render() {
        return (
            <div id="task-list">
                <Row style={{background:'white'}}>
                    <Col 
                        lg={{ size: 6 }}
                        md={{ size: 6 }}
                        sm={{ size: 6 }}
                        xs={{ size: 6 }}                  
                    >
                    <span className="single-task">
                        <i className="tim-icons icon-check-2 tik-mark"></i>
                        
                    </span>  <span>Task one</span>
                    
                    </Col>

                    <Col md={{ size: 11 }}>
                   
                    <hr/>
                    </Col>

                </Row>
            </div>
        );
    }
}

export default TaskList;