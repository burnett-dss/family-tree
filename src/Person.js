import React from 'react';
import classNames from 'classnames';
import styles from './Person.css'; // eslint-disable-line no-unused-vars

/*
export interface IFamilyExtNode extends IFamilyNode {
  top: number;
  left: number;
  hasSubTree: boolean;
}
*/

export default function Person({ handleClick, isRoot, node, style }) {
    const rootStyles = isRoot ? ['inner', node.gender, 'isRoot'] : ['inner', node.gender];
    return (
      <div className='root' style={style}>
        <div
          className={classNames(rootStyles)}
          onClick={handleClick}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center'
          }}
        >
          {node.type}
        </div>
        {node.hasSubTree && (
          <div
            className={classNames('sub', node.gender)}
          />
        )}
      </div>
    );
}
