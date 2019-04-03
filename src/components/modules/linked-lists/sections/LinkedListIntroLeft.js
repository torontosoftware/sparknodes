import React from 'react';

class LinkedListIntroLeft extends React.Component {
  render() {
    return (
      <div>
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
        <p>
          Another important type of a linked list is called a
          circular linked list where last node of the list points
          back to the first node (or the head) of the list.
        </p>
        <h3>
          The Node class
        </h3>
        <p>
          In Java you are allowed to define a class (say, B)
          inside of another class (say, A). The class A is called
          the outer class, and the class B is called the inner class.
          The purpose of inner classes is purely to be used
          internally as helper classes. Here is the LinkedList
          class with the inner Node class
        </p>
      </div>
    );
  }
}

export default LinkedListIntroLeft;
