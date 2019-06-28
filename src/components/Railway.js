import React from 'react';
import './Railway.scss';

class Railway extends React.Component {
  constructor(props) {
    super(props);

    const initialIndex = 0;
    this.stations = this.props.nodes;
    this.rawStations = this.props.rawNodes;
    this.nextStations = this.props.nextStations;
    this.state = {
      currentIndex: initialIndex,
      currentStation: this.stations[ initialIndex ],
    };
  }

  setCurrentStation(index) {
    this.setState({
      currentIndex: index,
      currentStation: this.stations[ index ],
      nextStation: this.stations[ index + 1 ]
    });
  }

  setNextStation(nextStation) {
    for (let i = 0; i < this.nextStations.length; i++) {
      const station = this.nextStations[ i ];

      if (station.name === this.props.name) {
        station.node = nextStation;

        break;
      }
    }
  }

  moveToNextStation() {
    if (this.state.currentIndex < this.stations.length - 1) {
      const nextStationIndex = this.state.currentIndex + 1;
      const nextStation = this.rawStations[ nextStationIndex ];

      for (let i = 0; i < this.nextStations.length; i++) {
        const station = this.nextStations[ i ];

        if (station.name !== this.props.name &&
          station.node.top === nextStation.top &&
          station.node.left === nextStation.left) {

          return;
        }
      }

      this.setCurrentStation(nextStationIndex);
      this.setNextStation(nextStation);
    } else {
      this.reverseStations();
      this.moveToNextStation();
    }
  }

  reverseStations() {
    this.stations = this.props.nodes.reverse();
    this.rawStations = this.props.rawNodes.reverse();
    this.setCurrentStation(0);
    this.setNextStation(this.rawStations[ 1 ]);
  }

  componentDidMount() {
    setInterval(() => {
      this.moveToNextStation();
    }, 1000);
  }

  render() {
    const style = {
      top: this.state.currentStation.top,
      left: this.state.currentStation.left,
      backgroundColor: this.props.color,
    };

    return (
      <div
        className="railway"
        style={ style }
      >
        <div
          className="railway-pulse"
          style={ { backgroundColor: this.props.color } }
        />
      </div>
    );
  }
}

export default Railway;
