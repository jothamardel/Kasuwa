import React from 'react';


class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error) {
    this.setState({ hasError: true });
    console.log(error);
  }
  render() {
    return (
      <div>
        {this.state.hasError ? <h1>Sorry Something went wrong!</h1> : this.props.children}
      </div>
    );
  }
}

export default ErrorBoundary;