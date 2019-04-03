import React from 'react';
import FullDialog from '../../ui/FullDialog';
import { Link } from 'react-router-dom';

class ModuleSectionList extends React.Component {
  render() {
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
  }
}

export default ModuleSectionList;
