import React, { useState } from 'react';

import { 
      NavLink,
     
      DropdownToggle,
      DropdownMenu,
      DropdownItem,
      UncontrolledDropdown,
      Tooltip
     
       
      
   } from "reactstrap";

const ActionNav = () => {

  // for tooltip

  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggleTooltip = () => setTooltipOpen(!tooltipOpen);


    return (
        <>
            <div className="content" id="home">
            <UncontrolledDropdown>
                  <DropdownToggle
                    
                    color="default"
                    data-toggle="dropdown"
                    nav
                  >
                  
                    <span 
                      
                      href="#" id="TooltipAction" className="dot">
                      ooo
                    </span>
                  
                  <Tooltip 
                    placement="right" 
                    isOpen={tooltipOpen}
                    target="TooltipAction" 
                    toggle={toggleTooltip}
                    style={{background:'#0A2D48',color:'white'}}
                    >
                    Actions
                  </Tooltip>


                    
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-navbar" right tag="ul">
                    <NavLink tag="li" style={{padding:0}}>
                      <DropdownItem className="nav-item">
                          
                        <i style={{fontSize:'12px'}} className='tim-icons icon-simple-add'></i>Add section
                      </DropdownItem>
                    </NavLink>
                    <DropdownItem divider tag="li" />
                    <NavLink tag="li" style={{padding:0}}>
                      <DropdownItem className="nav-item">
                      <i style={{fontSize:'12px'}} className='tim-icons icon-calendar-60'></i> Sort by date 
                      
                      </DropdownItem>
                    </NavLink>
                    <NavLink tag="li" style={{padding:0}}>
                      <DropdownItem className="nav-item">
                      <i style={{fontSize:'12px'}} className='tim-icons icon-check-2'></i> Sort by priority
                      </DropdownItem>
                    </NavLink>
                    
                    <NavLink tag="li" style={{padding:0}}>
                      <DropdownItem className="nav-item">
                      <i style={{fontSize:'12px'}} className='tim-icons icon-check-2'></i> Sort by name
                      </DropdownItem>
                    </NavLink>
                    <DropdownItem divider tag="li" />
                    <NavLink tag="li" style={{padding:0}}>
                      <DropdownItem className="nav-item">
                      <i className='fas fa-upload'></i> Import from template
                      </DropdownItem>
                    </NavLink>
                    
                    <NavLink tag="li" style={{padding:0}}>
                      <DropdownItem className="nav-item">
                      <i className='fas fa-download'></i> Export as a template
                      </DropdownItem>
                    </NavLink>
                    <DropdownItem divider tag="li" />
                    <NavLink tag="li" style={{padding:0}}>
                      <DropdownItem className="nav-item">
                      <i style={{fontSize:'12px'}} className='tim-icons icon-email-85'></i> Email tasks to this project
                      </DropdownItem>
                    </NavLink>
                    <NavLink tag="li" style={{padding:0}}>
                      <DropdownItem className="nav-item">
                      <i style={{fontSize:'12px'}} className='tim-icons icon-calendar-60'></i> Project calendar feed
                      </DropdownItem>
                    </NavLink>
                    
                    
                    <DropdownItem divider tag="li" />
                    <NavLink tag="li" style={{padding:0}}>
                      <DropdownItem className="nav-item">
                      <i style={{fontSize:'12px'}} className='tim-icons icon-bullet-list-67'></i> Show completed tasks
                      </DropdownItem>
                    </NavLink>
                  </DropdownMenu>
            </UncontrolledDropdown>
            </div>
        </>
    );
};

export default ActionNav;