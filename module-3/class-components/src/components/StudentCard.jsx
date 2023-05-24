import React, { Component } from 'react';

class StudentCard extends Component {
  render() {
    const { info } = this.props;
    return(
      <div>
        Student name: {this.props.name}
        <br />
        {this.props.info && (
          <React.Fragment>
            Course: {this.props.info.course} | City: {this.props.info.city}
            <br />
          </React.Fragment>
        )}
        <br />
      </div>
    )
  }
}

export default StudentCard;