
import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  Button,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col
} from "reactstrap";

class TabSubtaskCommAct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      horizontalTabs: "subtask",
      verticalTabs: "subtask",
      verticalTabsIcons: "home",
      pageTabs: "home",
      openedCollapses: ["collapseOne"]
    };
  }
  // with this function we create an array with the opened collapses
  // it is like a toggle function for all collapses from this page
  collapsesToggle = (e, collapse) => {
    e.preventDefault();
    let openedCollapses = this.state.openedCollapses;
    if (openedCollapses.includes(collapse)) {
      this.setState({
        openedCollapses: openedCollapses.filter(item => item !== collapse)
      });
    } else {
      openedCollapses.push(collapse);
      this.setState({
        openedCollapses: openedCollapses
      });
    }
  };
  // with this function we change the active tab for all the tabs in this page
  changeActiveTab = (e, tabState, tadName) => {
    e.preventDefault();
    this.setState({
      [tabState]: tadName
    });
  };
  render() {
    return (
      <>
        <div className="content" id="home">
          <Row>
            <Col md="12">
              <Card>
                
                <CardBody>
                  <Nav className="nav-pills-info" pills>

                  <NavItem style={{width:'33%'}}>
                      <NavLink style={{borderRadius:'0px',marginRight:'1px'}}
                        data-toggle="tab"
                        href="#pablo"
                        className={
                          this.state.horizontalTabs === "subtask" 
                            ? "active"
                            : ""
                        }
                        onClick={e =>
                          this.changeActiveTab(e, "horizontalTabs", "subtask")
                        }
                      >
                        Subtask
                      </NavLink>
                    </NavItem>

                    <NavItem style={{width:'33%'}}>
                      <NavLink style={{borderRadius:'0px',marginRight:'1px'}}
                        data-toggle="tab"
                        href="#pablo"
                        className={
                          this.state.horizontalTabs === "comments" 
                            ? "active"
                            : ""
                        }
                        onClick={e =>
                          this.changeActiveTab(e, "horizontalTabs", "comments")
                        }
                      >
                        Comments
                      </NavLink>
                    </NavItem>
                    <NavItem style={{width:'33%'}}>
                      <NavLink style={{borderRadius:'0px'}}
                        data-toggle="tab"
                        href="#pablo"
                        className={
                          this.state.horizontalTabs === "activity"
                            ? "active"
                            : ""
                        }
                        onClick={e =>
                          this.changeActiveTab(e, "horizontalTabs", "activity")
                        }
                      >
                        Activity
                      </NavLink>
                    </NavItem>
                   
                  </Nav>
                  <TabContent
                    className="tab-space"
                    activeTab={this.state.horizontalTabs}
                  >

                    <TabPane tabId="subtask">
                          <h1>I am subtask</h1>
                    </TabPane>


                    <TabPane tabId="comments">
                          <div style={{padding:'10px 50px'}}>
                              Add notes, file uploads, and voice memos to your project, so you always have the information you need right when you need it.
                              </div>

                              <div style={{padding:'10px 25%'}}>
                              <Button color="default" size="sm">Go Premium</Button>Learn More
                              </div>
                              <div style={{width:'100%',height:'140px',border:'1px solid gray',padding:'10px'}}>
                                <input type="text" 
                                
                                 autoFocus='on' 
                                 className="comment_input_box"
                                 placeholder='comment please'/>
                                 <hr style={{width:'95%'}}/>

                                 <i className='tim-icons icon-attach-87' style={{marginLeft:'2%'}}></i>
                                 <i className='fas fa-microphone' style={{marginLeft:'2%'}}></i>
                                 <i className="fas fa-smile" style={{marginLeft:'2%',color:'gray'}}></i>
                                 <Button color="default" style={{marginLeft:'50%',marginRight:'10%',color:'whitee',display:'inline'}} size="sm">Add Comment</Button>
                                 

                              </div>
                    </TabPane>


                    <TabPane tabId="activity">
                        <div style={{padding:'10px 50px'}}>
                              Add notes, file uploads, and voice memos to your project, so you always have the information you need right when you need it.
                              </div>

                              <div style={{padding:'10px 25%'}}>
                              <Button color="default" size="sm">Go Premium</Button>Learn More
                        </div>
                    </TabPane>
                    
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
    
          </Row>
          
          
        </div>
      </>
    );
  }
}

export default TabSubtaskCommAct;
