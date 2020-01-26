
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// react plugin for creating vector maps
import { VectorMap } from "react-jvectormap";
import './styles.scss'
// import './AddSection/AddSection'

// reactstrap components
import {
  CardTitle,
  Row,
  Col,
 
} from "reactstrap";

// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4
} from "variables/charts.jsx";

// import CustomModal from './CustomModal/CustomModal'
// import ActionNav from "./ActionNav/ActionNav";
// import AddSection from "./AddSection/AddSection";
// import TaskList from "./TaskList/TaskList";
// import SingleTask from "../components/SingleTask/SingleTask";

import {indexTaskList} from '../../actions/IndexAction/IndexAction'
import {withRouter } from "react-router-dom";
import { connect } from 'react-redux'



class Today extends React.Component {
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
    // localStorage.removeItem('token')

    console.log('localstorage',localStorage.getItem('token'))
    const indexTaskListMessage = this.props.index_task.index_task_list.message
    
    return (
      <>
      
        <div className="content" id="home">
            <h1>I am today</h1>
          
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  
  index_task:state.indexReducer,
  
}) 


export default withRouter(connect(mapStateToProps)(Today))

// export default Home;
