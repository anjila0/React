import React from "react";
class Welcome extends React.Component {
  render() {
    return (
      <h1>
        Welcome {this.props.name} a.k.a {this.props.heroName}
      </h1>
    );
  }
}
export default Welcome;
