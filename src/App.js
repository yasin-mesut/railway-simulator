import React from 'react';
import Route from './components/Route';
import routes from './data/routes';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    // Global props to persist a railways next station.
    this.nextStations = routes.map((route) => {
      return {
        name: route.name,
        node: route.nodes[ 1 ],
      }
    });

    // All nodes to properly render multi node stations.
    let multiNodes = [];
    let allNodes = routes.map((route) => {
      return route.nodes;
    }).flat();

    allNodes = allNodes.reduce((result, currentValue) => {
      for (let i = 0; i < result.length; i++) {
        const res = result[ i ];

        if (res.top === currentValue.top &&
          res.left === currentValue.left) {
          multiNodes.push(currentValue);
          return result;
        }
      }

      result.push(currentValue);
      return result;
    }, []);

    // Share nodes between all routes.
    localStorage.setItem('multiNodes', JSON.stringify(multiNodes));
    localStorage.setItem('allNodes', JSON.stringify(allNodes));
  }

  render() {
    const Routes = routes.map((route) =>
      <Route
        key={ route.name }
        name={ route.name }
        nodes={ route.nodes }
        color={ route.color }
        nextStations={ this.nextStations }
      />
    );

    return (
      <div className="App">
        { Routes }
      </div>
    );
  }
}

export default App;
