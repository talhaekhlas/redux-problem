import React, { Component } from 'react';

import {
    Row,
    Col,
    InputGroup, Input,Button
  } from "reactstrap";
import ReactDatetime from "react-datetime";
import './styles.scss'
import ProjectList from './ProjectList/ProjectList'
import LabelList from './LabelList/LabelList'
import FlagList from './FlagList/FlagList'
import Reminder from './Reminder/Reminder'
import ThreeDot from './ThreeDot/ThreeDot'

class AddSection extends Component {

    constructor(props) {
        super(props);
        this.state = {
          bigChartData: "data1",
          
        };
      }

      

    render() {
        return (
            <div id='add-section'>

                <Row className="background" style={{padding:'5px'}} >
                    <Col md={{ size: 12 }}> 
                        <i 
                        className="tim-icons icon-simple-add"
                        onClick={this.props.taskInputBox}
                        >

                        </i>
                        <span className='add-task' onClick={this.props.taskInputBox}>
                            &nbsp;&nbsp;&nbsp;&nbsp; Add Task
                        </span>
                    </Col>
                </Row>

                {this.props.taskInputBoxStatus?
                <Row className="background" style={{padding:'5px'}} >
                <Col md={{ size: 12 }}> 
                <InputGroup>
                    <Input/>
                    
                    <ReactDatetime
                      className='add-task-date-time'
                      inputProps={{
                        className: "form-control",
                        placeholder: "Datetime Picker Here"
                      }}
                    />
                   
                </InputGroup>
                </Col>
                <Col 
                lg={{ size: 5 }}
                md={{ size: 5 }}
                sm={{ size: 5 }}
                xs={{ size: 6 }}
                >
                <Button color="default" size="sm">Add</Button>
                <span 
                    color="danger" 
                    size="sm" 
                    onClick={this.props.taskInputBoxCancel}
                    style={{textDecoration:'underline'}}
                    >
                    Cancel
                    </span>
                
                </Col>
                <Col
                 lg={{ size: 3,offset:4 }}
                 md={{ size: 3,offset:4 }}
                 sm={{ size: 4,offset:3 }}
                 xs={{ size: 6 }}
                >
                    <span><ProjectList/></span>
                    <span style={{marginLeft:'15px'}}><LabelList/></span>
                    <span style={{marginLeft:'15px'}}><FlagList/></span>
                    <span style={{marginLeft:'15px'}}><Reminder/></span>
                    <span style={{marginLeft:'15px'}}><ThreeDot/></span>
                    
                    
                </Col>
              </Row>:null
                }

                


            </div>
            
        );
    }
}

export default AddSection;