import React from 'react';
import {Entity} from 'draft-js';

class H1 extends React.Component {
  render() {
    const {block} = this.props;
    //const {foo} = this.props.blockProps;
    const data = Entity.get(block.getEntityAt(0)).getData();
    // Return a <figure> or some other content using this data.
    return (<h1>wena</h1>);
  }
}

export default H1;
