import React from 'react';
import Line from './Line';
import Railway from './Railway';
import './Route.scss';

class Route extends React.Component {
  constructor(props) {
    super(props);

    this.nodes = this.props.nodes.map((node) => {
      return {
        top: `${ node.top }vh`,
        left: `${ node.left }vw`,
      };
    });
  }

  isMultiNode(currentNode) {
    const multiNodes = JSON.parse(localStorage.getItem('multiNodes'));

    for (let i = 0; i < multiNodes.length; i++) {
      const node = multiNodes[ i ];

      if (node.top === currentNode.top && node.left === currentNode.left) {
        return 'station-node--is-multi-node'
      }
    }
    return '';
  }

  renderLine(node, index) {
    if (index < (this.nodes.length - 1)) {
      return (
        <Line
          color={ this.props.color }
          from={ { top: node.top, left: node.left } }
          to={ { top: this.nodes[ index + 1 ].top, left: this.nodes[ index + 1 ].left } }
        />
      )
    }
  }

  renderTitle(index) {
    const style = {
      color: this.props.color,
    };

    if (index === 0) {
      return (
        <h2
          className="title"
          style={ style }
        >
          { this.props.name }
        </h2>
      );
    }
  }

  renderNodes() {
    return this.nodes.map((node, index) => {
      const styles = {
        top: node.top,
        left: node.left,
        backgroundColor: this.props.color,
      };

      return (
        <span
          className={ `station-node ${ this.isMultiNode(this.props.nodes[ index ]) }` }
          key={ `Route-${ node.name }-${ index }` }
          style={ styles }
        >
          { this.renderTitle(index) }
          { this.renderLine(node, index) }
        </span>
      )
    });
  }

  render() {
    return (
      <div>
        <Railway
          name={ this.props.name }
          nodes={ this.nodes }
          rawNodes={ this.props.nodes }
          nextStations={ this.props.nextStations }
          color={ this.props.color }
        />
        { this.renderNodes() }
      </div>
    );
  }
}

export default Route;
