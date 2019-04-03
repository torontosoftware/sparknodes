import React from 'react';
import FullDialog from '../ui/FullDialog';
import { Link } from 'react-router-dom';

class ModuleSectionList extends React.Component {
  render() {
    if (this.props.show) {
      return (
        <FullDialog>
          <Link to='/'>
            Introduction
          </Link>
          <Link to='/'>
            Nodes
          </Link>
          <Link to='/'>
            Circular Linked List
          </Link>
        </FullDialog>
      );
    } else {
      return (
        <div></div>
      )
    }
  }
}

export default ModuleSectionList;
