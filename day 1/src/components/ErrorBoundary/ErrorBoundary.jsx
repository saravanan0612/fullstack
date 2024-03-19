import { Component } from "react";
import PropTypes from "prop-types";
import error from '../../assets/Error/404.gif'
export default class ErrorBoundary extends Component {
 
    constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

    componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex w-full h-full justify-center items-center">
          <img src={error} />
        </div>
      )
    }
    return this.props.children; 
  }
}

ErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired
};
