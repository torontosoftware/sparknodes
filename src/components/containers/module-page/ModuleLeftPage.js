import React from 'react';

class ModuleLeftPage extends React.Component {
  render() {
    return (
      <div className="left col-12 col-md-5 col-lg-4">
        <h2>
          Linked Lists
        </h2>
        <h3>
          Introduction
        </h3>
        <p>
          Each element (we will call it a node) of a list is
          comprising of two items - the data and a reference
          to the next node. The last node has a reference to null.
          The entry point into a linked list is called the head
          of the list. It should be noted that head is not a
          separate node, but the reference to the first node.
          If the list is empty then the head is a null reference.
        </p>
        <h3>
          Types of Linked Lists
        </h3>
        <p>
          A singly linked list is described above
        </p>
        <p>
          A doubly linked list is a list that has two references,
          one to the next node and another to previous node.
        </p>
      </div>
    );
  }
}

export default ModuleLeftPage;
