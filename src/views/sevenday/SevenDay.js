
import React from "react";

import './styles.scss'

import {indexTaskList} from '../../actions/IndexAction/IndexAction'
import {withRouter } from "react-router-dom";
import { connect } from 'react-redux'



class SevenDay extends React.Component {
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
    // const indexTaskListMessage = this.props.index_task.index_task_list.message
    
    return (
      <>
      
        <div className="content" id="home">
            <h1>I am Seven Day</h1>
          
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  
  index_task:state.indexReducer,
  
}) 


export default withRouter(connect(mapStateToProps)(SevenDay))

// export default Home;
