import React, { Component } from "react";
import Popular from "./Popular";
import New from "./New";

const raiting = (WrappedComponent) => {
  return class extends Component {
    render() {
      const { views } = this.props;
      if (views >= 1000) {
        return (
          <Popular>
            <WrappedComponent {...this.props} />
          </Popular>
        );
      } else if (views < 100) {
        return (
          <New>
            <WrappedComponent {...this.props} />
          </New>
        );
      }
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default raiting;
