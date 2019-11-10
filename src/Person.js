import React from 'react';
import classNames from 'classnames';
import styles from './Person.css'; // eslint-disable-line no-unused-vars

class Person extends React.Component {
  render() {
    let rootStyles = this.props.isRoot ?
        ['inner', this.props.node.gender, 'isRoot'] :
        ['inner', this.props.node.gender];
    return (
      <div className='root' style={this.props.style}>
        <div
          className={classNames(rootStyles)}
          onClick={this.props.handleClick}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center'
          }}
        >
          {this.props.node.id}
        </div>
        {this.props.node.hasSubTree && (
          <div
            className={classNames('sub', this.props.node.gender)}
          />
        )}
      </div>
    );
  }
}

export default Person;
