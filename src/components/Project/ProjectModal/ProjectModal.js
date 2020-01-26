import React, { useState,Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter,
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    Label,
    FormGroup,
    Form,
    Input,
    Row,
    Col
 } from 'reactstrap';
 import Select from "react-select";
 import Switch from "react-bootstrap-switch";

class ProjectModal extends Component {

    state = {
        toggleStatus:true
    }

    customToggle = ()=>{

        console.log('text')
        this.setState({
            ...this.state,
            toggleStatus:false
        })

        
    }

    

    closeBtn = <button className="close" onClick={this.toggleStatus}>&times;</button>;
    render() {
        
        console.log('props',this.props.projectModalClose)
        return (
            <div>

           {/* <Button color="secondary" onClick={this.props.projectModalClose}>Cancel</Button> */}
                {/* <Button color="danger" onClick={toggle}>{buttonLabel}</Button> */}
                <Modal 
                isOpen={this.props.projectModalOpenStatus}
                toggle={this.props.projectModalClose}>
                <ModalHeader onClick={this.props.projectModalClose} close={this.closeBtn}>Add Project</ModalHeader>
                <ModalBody>
                <Form action="#">
                    <label>Project Name</label>
                    <FormGroup>
                      <Input type="text" />
                    </FormGroup>

                    <label>Project Color</label>
                    <FormGroup>
                    <Select
                            className="react-select info"
                            classNamePrefix="react-select"
                            name="singleSelect"
                            value={this.state.singleSelect}
                            onChange={value =>
                              this.setState({ singleSelect: value })
                            }
                            options={[
                              {
                                value: "",
                                label: "Single Option",
                                isDisabled: true
                              },
                              { value: "2", label: 
                              <><span style={{height:'12px',
                               width:'12px',borderRadius:'15px',
                               background:'red',display:'inline-block',
                            marginRight:'10px'}}></span>
                            <span>Red</span> </>
                             },
                              { value: "3", label: "Two" },
                              { value: "4", label: "Three" },
                              { value: "5", label: "Four" }
                            ]}
                            placeholder="Single Select"
                          />
                    </FormGroup>

                    <Switch offColor="" onColor="" />{" "} <span>Add to Favorites</span>
                          



                   
                    
                  </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.props.projectModalClose}>Add</Button>{' '}
                    <Button color="danger" onClick={this.props.projectModalClose}>Cancel</Button>
                </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ProjectModal;