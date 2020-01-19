
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// react plugin for creating vector maps
import { VectorMap } from "react-jvectormap";
import './styles.scss'
import './AddSection/AddSection'

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

import CustomModal from './CustomModal/CustomModal'
import ActionNav from "./ActionNav/ActionNav";
import AddSection from "./AddSection/AddSection";



class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bigChartData: "data1",
      task_input_box:false
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

//   setBgChartData = name => {
//     this.setState({
//       bigChartData: name
//     });
//   };
  render() {
    
    return (
      <>
        <div className="content" id="home">
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

export default Home;
