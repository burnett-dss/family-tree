import React from 'react';
import ReactFamilyTree from 'react-family-tree';
import Person from './Person.jsx';
import InfoBox from './InfoBox.jsx';
import styles from './App.css'; // eslint-disable-line no-unused-vars

import data from './example_data.js';
const rootId = 'Me';
const familyNamesList = ["Me", "Dad", "Mom", "John", "Susan", "Noel"];

const WIDTH = 70;
const HEIGHT = 80;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      info: null
    }
  }

  renderPerson(node) {
    let dx = node.left * (WIDTH / 2);
    let dy = node.top * (HEIGHT / 2);
    let style = {
      width: WIDTH,
      height: HEIGHT,
      transform: `translate(${dx}px, ${dy}px)`,
    };
    return (
      <Person
          key={node.id}
          node={node}
          isRoot={node.id === rootId}
          style={style}
          handleClick={() => {/* show the node.bio in the info box */}}
          type={node.type} />
    );
  }

  render() {
    return (
      <div className='root'>
        <ReactFamilyTree
            nodes={data}
            rootId={rootId}
            width={WIDTH}
            height={HEIGHT}
            canvasClassName='tree'
            renderNode={(node) => this.renderPerson(node)} />
        <InfoBox
            namesList={familyNamesList}
            info={this.state.info} />
      </div>
    );
  }
}

export default App;
