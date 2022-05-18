import { Component, ErrorInfo, ReactNode } from "react";
import { Link, Navigate } from 'react-router-dom';

interface IProps {
  children: ReactNode
}

class ErrorBoundary extends Component<IProps> {
  state = { hasError: false, redirect: false }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(error, info);
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({redirect: true}), 5000)
    }
  }

  render() {

    if (this.state.redirect) {
      return <Navigate to="/" />
    }

    if (this.state.hasError) {
      return (
        <h2>
          There was an error. Oh no. What are we going to do.
          <Link to="/">Click here</Link> to go back to the Homepage. Or wait five seconds and we will do it for you.
        </h2>
      )
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
