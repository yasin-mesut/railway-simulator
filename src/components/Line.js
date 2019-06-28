import React from 'react';
import './Line.scss';

class Railway extends React.Component {
  render() {
    const style = {
      stroke: this.props.color,
      strokeWidth: 5
    };

    return (
      <svg className="line">
        <line
          x1={this.props.from.left}
          y1={this.props.from.top}
          x2={this.props.to.left}
          y2={this.props.to.top}
          style={style}
        />
      </svg>
    );
  }
}

export default Railway;
