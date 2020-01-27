
import React from "react";

import './styles.scss'
import './AddSection/AddSection'

// reactstrap components
import {
  CardTitle,
  Row,
  Col,
 
} from "reactstrap";


import CustomModal from './CustomModal/CustomModal'
import ActionNav from "./ActionNav/ActionNav";
import AddSection from "./AddSection/AddSection";
import SingleTask from "../components/SingleTask/SingleTask";

import {indexTaskList} from '../../actions/IndexAction/IndexAction'
import {withRouter } from "react-router-dom";
import { connect } from 'react-redux'



class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bigChartData: "data1",
      task_input_box:false,
      task_list_action:false
    };
  }

  taskInputBox = ()=>{
    this.setState({
        task_input_box:true
    });
  
  }

  taskInputBoxCancel = ()=>{
    this.setState({
        task_input_box:false
    });
  
  }

  showTaskListAction = ()=>{
    this.setState({
      task_list_action:true
    });
  }

  hideTaskListAction = ()=>{
    this.setState({
      task_list_action:false
    });
  }

  reduxCheck = ()=>{
    const {dispatch } = this.props;  
    dispatch(indexTaskList());
    
  }


  render() {
   
    const indexTaskListMessage = this.props.index_task.index_task_list.message
    
    return (
      <>
      
        <div className="content" id="home">
            
            <span onClick={()=>this.reduxCheck()}>Hamba</span>
            <Row className="background" style={{padding:'5px'}}>
                <Col  
                lg={{ size: 1 }}
                md={{ size: 1 }}
                sm={{ size: 2 }}
                xs={{ size: 2 }}
                >
                    <CardTitle>Index</CardTitle>
                </Col>

                <Col  
                lg={{ size: 1,offset:8 }}
                md={{ size: 2,offset:7 }}
                sm={{ size: 2,offset:6 }}
                xs={{ size: 2,offset:5 }}
                >
                    <CustomModal/>
                </Col>

                <Col  
                lg={{ size: 1 }}
                md={{ size: 2 }}
                sm={{ size: 2 }}
                xs={{ size: 2 }}
                style={{marginTop:'-10px'}}
                >
                  <ActionNav/>

                </Col>

            </Row>

            <SingleTask/>

            {/* <TaskList
              showTaskListAction = {this.showTaskListAction}
              hideTaskListAction = {this.hideTaskListAction}
              task_list_action = {this.state.task_list_action}
            />
             */}

            <AddSection 
            taskInputBox={this.taskInputBox}
            taskInputBoxCancel={this.taskInputBoxCancel}
            taskInputBoxStatus = {this.state.task_input_box}

            />
          
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  
  index_task:state.indexReducer,
  
}) 


export default withRouter(connect(mapStateToProps)(Home))

// export default Home;
