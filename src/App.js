import React from 'react';
import ReactFamilyTree from 'react-family-tree';
import Person from './Person';
import styles from './App.css'; // eslint-disable-line no-unused-vars

import data from './data_small.json';
const rootId = 'kuVISwh7w';

const WIDTH = 70;
const HEIGHT = 80;

export default function App() {
    return (
      <div className='root'>
          <ReactFamilyTree
            nodes={data}
            rootId={rootId}
            width={WIDTH}
            height={HEIGHT}
            canvasClassName='tree'
            renderNode={(node) => (
              <Person
                key={node.id}
                node={node}
                isRoot={node.id === rootId}
                style={{
                  width: WIDTH,
                  height: HEIGHT,
                  transform: `translate(${node.left * (WIDTH / 2)}px, ${node.top * (HEIGHT / 2)}px)`,
                }}
                handleClick={() => { console.log(node.id)}}
                type={node.type}
              />
            )}
          />
      </div>
    );
  }
