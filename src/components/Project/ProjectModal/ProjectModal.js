import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter,
    Button,
    FormGroup,
    Form,
    Input,
 } from 'reactstrap';
 import Select from "react-select";
 import Switch from "react-bootstrap-switch";

class ProjectModal extends Component {

    state = {
        toggleStatus:true
    }

    customToggle = ()=>{

        
        this.setState({
            ...this.state,
            toggleStatus:false
        })

        
    }


    handleSwitch(elem, state) {
      console.log('handleSwitch. elem:', elem);
      console.log('name:', elem.props.name);
      console.log('new state:', state);
    }

    

    closeBtn = <button className="close" onClick={this.toggleStatus}>&times;</button>;
    render() {
        
        
        return (
            <div>

           {/* <Button color="secondary" onClick={this.props.projectModalClose}>Cancel</Button> */}
                {/* <Button color="danger" onClick={toggle}>{buttonLabel}</Button> */}
                
                <Modal 
                isOpen={this.props.projectModalOpenStatus}
                toggle={this.props.projectModalClose}>
                  <Form  onSubmit = {this.props.saveProject}>
                  
                <ModalHeader onClick={this.props.projectModalClose} close={this.closeBtn}>Add Project</ModalHeader>
                
                <ModalBody>
                
                    <label>Project Name</label>
                    <FormGroup>
                      <Input type="text" id="project_name" />
                    </FormGroup>
                    <label>Project Description</label>
                    <FormGroup>
                      <textarea type="text" id="project_description" className="form-control"/>
                    </FormGroup>

                    <label>Project Color</label>
                    <FormGroup>
                    <Select
                            className="react-select info"
                            classNamePrefix="react-select"
                            name="singleSelect"
                            id="project_color"
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

                    {/* <Switch id="favorite_status" offColor="" onColor="" />{" "} <span>Add to Favorites</span> */}
                    <Switch onChange={(el, state) => this.handleSwitch(el, state)} name='test' />
                    {" "} <span>Add to Favorites</span>

                   
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" size="sm" type="submit">Add</Button>{' '}
                    <Button color="danger" size="sm" onClick={this.props.projectModalClose}>Cancel</Button>
                </ModalFooter>
                </Form>
                </Modal>
                
            </div>
        );
    }
}

export default ProjectModal;