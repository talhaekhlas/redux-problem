import React from 'react'
import { render } from 'react-dom'
import 'babel-polyfill'
import Root from './containers/Root'
import "assets/css/nucleo-icons.css";
import "assets/scss/black-dashboard-pro-react.scss?v=1.0.0";
import "assets/demo/demo.css";
import "react-notification-alert/dist/animate.css";


render(<Root />, document.getElementById('root'))
