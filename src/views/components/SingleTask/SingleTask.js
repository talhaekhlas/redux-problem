import React, { Component } from 'react';
import {Row,Col} from "reactstrap";

import './styles.scss'

import SubtaskCommentActivity from './SubtaskCommentActivity/SubtaskCommentActivity'
import SubtaskCommentActivity2 from './SubtaskCommentActivity/SubtaskCommentActivity2'
import DateSetup from './DateSetup/DateSetup'
import TaskAction from './TaskAction/TaskAction'

class SingleTask extends Component {

    constructor(props) {
        super(props);
        this.state = {
          bigChartData: "data1",
          task_input_box:false,
          task_list_action:false
        };
      }

    showSingleTask = ()=>{
        this.setState({
          task_list_action:true
        });
      }
    
      hideSingleTask = ()=>{
        this.setState({
          task_list_action:false
        });
    }


    render() {
        return (
            <div id='single-task'>
                 <Row 
                 style={{background:'white'}}
                 className="hide-show"
                 onMouseEnter = {this.showSingleTask}
                 onMouseLeave = {this.hideSingleTask}
                 
                 >
                    
                    <Col 
                        lg={{ size: 7 }}
                        md={{ size: 7 }}
                        sm={{ size: 7 }}
                        xs={{ size: 7 }}                  
                    >
                    <span className="single-task">
                        <i className="tim-icons icon-check-2 tik-mark"></i>
                        
                    </span>&nbsp;&nbsp;&nbsp;  <span>Task one</span>
                    
                    </Col>

                    <Col 
                        lg={{ size: 5 }}
                        md={{ size: 5 }}
                        sm={{ size: 5 }}
                        xs={{ size: 5 }}
                    >
                        {this.state.task_list_action &&
                        <div>
                            <SubtaskCommentActivity/>
                            <DateSetup/>
                            <SubtaskCommentActivity2/>
                            <TaskAction/>
                        </div>
                        }
                    
                    </Col>
                </Row>
                
                <Row style={{background:'white'}}>
                    <Col md={{ size: 11 }}>
                   
                    <hr/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default SingleTask;