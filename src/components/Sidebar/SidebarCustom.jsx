
import React from "react";
import { NavLink,withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import PerfectScrollbar from "perfect-scrollbar";

import ProjectModal from '../Project/ProjectModal/ProjectModal'
import { Nav, Collapse } from "reactstrap";
import { projectModalShow } from "../../actions/ProjectAction/ProjectAction";
import Project from "../Project/Project";


var ps;

class SidebarCustom extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getCollapseStates(props.routes);

    this.state.projectModalStatus = false;
    this.state.projectModalOpenStatus = false;
  }
  // this creates the intial state of this component based on the collapse routes
  // that it gets through this.props.routes
  getCollapseStates = routes => {
    let initialState = {};
    routes.map((prop, key) => {
      if (prop.collapse) {
        initialState = {
          [prop.state]: this.getCollapseInitialState(prop.views),
          ...this.getCollapseStates(prop.views),
          ...initialState
        };
      }
      return null;
    });
    return initialState;
  };


  addProjectFrom = ()=>{
    this.setState({
      ...this.state,
      projectModalStatus:true,
      projectModalOpenStatus:true
    })

    const {dispatch } = this.props; 
    dispatch(projectModalShow());
    
  }

  projectModalClose = () =>{

    console.log('project modal close')
    this.setState({
      ...this.state,
      projectModalStatus:false,
      projectModalOpenStatus:false
    })
  }


  saveProject = () =>{

    console.log('project name',document.querySelector('#project_name').value)
    console.log('project color',document.querySelector('#project_color').children[1].value)
    console.log('favorite color',document.querySelector('#project_description').value)
    this.setState({
      ...this.state,
      projectModalStatus:false,
      projectModalOpenStatus:false
    })
  }


  // this verifies if any of the collapses should be default opened on a rerender of this component
  // for example, on the refresh of the page,
  // while on the src/views/forms/RegularForms.jsx - route /admin/regular-forms
  getCollapseInitialState(routes) {
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse && this.getCollapseInitialState(routes[i].views)) {
        return true;
      } else if (window.location.href.indexOf(routes[i].path) !== -1) {
        return true;
      }
    }
    return false;
  }
  // this function creates the links and collapses that appear in the sidebar (left menu)
  createLinks = routes => {
    const { rtlActive } = this.props;
    return routes.map((prop, key) => {
      if (prop.redirect) {
        return null;
      }
      if (prop.collapse) {
        var st = {};
        st[prop["state"]] = !this.state[prop.state];
        return (
          <li
            className={this.getCollapseInitialState(prop.views) ? "active" : "" +
             prop.name === 'Projects' ? 'project' : null }
            key={key}
          >
            
            <a 
              href="#"
              data-toggle="collapse"
              aria-expanded={this.state[prop.state]}
              onClick={e => {
                e.preventDefault();
                this.setState(st);
              }}
            >
              

              
              {prop.icon !== undefined ? (
                <>
                  <i className={prop.icon} />
                  <p>
                    {rtlActive ? prop.rtlName : prop.name}
                    <b className="caret" />
                  </p>
                </>
              ) : (
                <>
                  <span className="sidebar-mini-icon">
                    {rtlActive ? prop.rtlMini : prop.mini}
                  </span>
                  <span className="sidebar-normal">
                    {rtlActive ? prop.rtlName : prop.name}
                    <b className="caret" />
                  </span>
                </>
              )}
            </a>

            {/* {(prop.name=='Projects' && this.state.projectModalStatus==true)?
            <span className="plus-icon" onClick={this.addProjectFrom}>
              <i className="tim-icons icon-simple-add"></i></span>
              :null} */}
           
            {prop.name==='Projects'?
            <>
              <span className="plus-icon" onClick={this.addProjectFrom}>
              <i className="tim-icons icon-simple-add"></i></span>
              {this.state.projectModalStatus?
              <ProjectModal 
              projectModalClose ={this.projectModalClose}
              saveProject ={this.saveProject}
              projectModalOpenStatus = {this.state.projectModalOpenStatus}
              />:null}
              </>
              :null}

              

            <Collapse isOpen={this.state[prop.state]}>
              <ul className="nav">{this.createLinks(prop.views)}</ul>
            </Collapse>
          </li>
        );
      }
      return (
        <li className={this.activeRoute(prop.layout + prop.path)} key={key}>
          <NavLink to={prop.layout + prop.path} activeClassName="" onClick={this.props.closeSidebar}>
          {prop.icon !== undefined ? (
              <>
                <i className={prop.icon} />
                <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                <p>{rtlActive ? prop.rtlName : prop.name}</p>
                <span style={{  }}>ooo</span>
                </div>
              </>
            ) : (
              <>
                <span className="sidebar-mini-icon">
                  {rtlActive ? prop.rtlMini : prop.mini}
                </span>
                <span className="sidebar-normal">
                  {rtlActive ? prop.rtlName : prop.name} Talha
                </span>
              </>
            )}
          </NavLink>
        </li>
      );
    });
  };
  // verifies if routeName is the one active (in browser input)
  activeRoute = routeName => {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  componentDidMount() {
    // if you are using a Windows Machine, the scrollbars will have a Mac look
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.refs.sidebar);
    }
  }
  componentWillUnmount() {
    // we need to destroy the false scrollbar when we navigate
    // to a page that doesn't have this component rendered
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
    }
  }

  



  render() {
    
    const { activeColor, logo } = this.props;
    let logoImg = null;
    let logoText = null;
    if (logo !== undefined) {
      if (logo.outterLink !== undefined) {
        logoImg = (
          <a
            href={logo.outterLink}
            className="simple-text logo-mini"
            target="_blank"
            onClick={this.props.closeSidebar}
          >
            <div className="logo-img">
              <img src={logo.imgSrc} alt="react-logo" />
            </div>
          </a>
        );
        logoText = (
          <a
            href={logo.outterLink}
            className="simple-text logo-normal"
            target="_blank"
            onClick={this.props.closeSidebar}
          >
            {logo.text}
          </a>
        );
      } else {
        logoImg = (
          <NavLink
            to={logo.innerLink}
            className="simple-text logo-mini"
            onClick={this.props.closeSidebar}
          >
            <div className="logo-img">
              <img src={logo.imgSrc} alt="react-logo" />
            </div>
          </NavLink>
        );
        logoText = (
          <NavLink
            to={logo.innerLink}
            className="simple-text logo-normal"
            onClick={this.props.closeSidebar}
          >
            {logo.text}
          </NavLink>
        );
      }
    }

    var customRoute = this.props.routes

    customRoute[3] = {
      path: "/project",
      name: "Hamba",
      rtlName: "لوحة القيادة",
      icon: "tim-icons icon-book-bookmark",
      component: Project,
      layout: "/custom"
    }


    return (
      <div className="sidebar" data={activeColor}>
        <div className="sidebar-wrapper" ref="sidebar">
          {logoImg !== null || logoText !== null ? (
            <div className="logo">
              {logoImg}
              {logoText}
            </div>
          ) : null}
          <Nav>{this.createLinks(this.props.routes)}</Nav>
        </div>
      </div>
    );
  }
}

SidebarCustom.propTypes = {
  activeColor: PropTypes.oneOf(["primary", "blue", "green", "orange", "red"]),
  rtlActive: PropTypes.bool,
  routes: PropTypes.array.isRequired,
  logo: PropTypes.oneOfType([
    PropTypes.shape({
      innerLink: PropTypes.string.isRequired,
      imgSrc: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    }),
    PropTypes.shape({
      outterLink: PropTypes.string.isRequired,
      imgSrc: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ]),
  // this is used on responsive to close the sidebar on route navigation
  closeSidebar: PropTypes.func
};


const mapStateToProps = state => ({
  project:state.projectReducer,
  
})

export default withRouter(connect(mapStateToProps)(SidebarCustom))
