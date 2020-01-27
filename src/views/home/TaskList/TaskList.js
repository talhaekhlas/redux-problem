import React, { Component } from 'react';

import {Row,Col} from "reactstrap";

import SubtaskCommentActivity from './SubtaskCommentActivity/SubtaskCommentActivity'
import SubtaskCommentActivity2 from './SubtaskCommentActivity/SubtaskCommentActivity2'
import DateSetup from './DateSetup/DateSetup'
import TaskAction from './TaskAction/TaskAction'

import './styles.scss'

class TaskList extends Component {
    render() {
        return (
            <div id="task-list">
                <Row 
                 style={{background:'white'}}
                 className="hide-show"
                //  onMouseOver = {this.props.showTaskListAction}
                 onMouseEnter = {this.props.showTaskListAction}
                //  onMouseUp = {this.props.showTaskListAction}
                //  onMouseOut = {this.props.hideTaskListAction}
                 onMouseLeave = {this.props.hideTaskListAction}
                 
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
                        {this.props.task_list_action &&
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

export default TaskList;