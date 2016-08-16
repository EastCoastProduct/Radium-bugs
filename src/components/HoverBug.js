'use strict';

import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';
import Spinner from './Spinner';

@Radium
export default class HoverBug extends Component {
  constructor() {
    super();
    this.addItem = this.addItem.bind(this);

    this.state = {
      adding: false,
      list: [
        { name: 'List Item 1', updating: false, },
        { name: 'List Item 2', updating: false, },
        { name: 'List Item 3', updating: false, },
        { name: 'List Item 4', updating: false, },
        { name: 'List Item 5', updating: false, },
        { name: 'List Item 6', updating: false, },
        { name: 'List Item 7', updating: false, },
        { name: 'List Item 8', updating: false, },
        { name: 'List Item 9', updating: false, },
        { name: 'List Item 10', updating: false, },
      ],
    };
  }

  addItem(e) {
    const { list } = this.state;
    e.preventDefault();

    const newList = [...list];
    newList.push({ name: e.target.elements.newItem.value, updating: false });

    this.setState({ adding: true });
    setTimeout(() => {
      this.setState({
        adding: false,
        list: newList
      });
    }, 3000);
  }

  deleteItem(e, index) {
    const { list } = this.state;
    e.preventDefault();

    list[index].updating = true;
    const newList = [...list];
    newList.splice(index, 1);

    this.setState({ list: list });
    setTimeout(() => {
      this.setState({
        list: newList
      });
    }, 3000);
  }

  renderList(list) {
    return list.map((item, index) => {
      return (
        <li style={styles.item} key={index}>
          {item.name}
          {item.updating ?
            <Spinner style={styles.spinner} /> :
            <i
              style={styles.icon}
              key={index}
              className="fa fa-trash"
              onClick={(e) => this.deleteItem(e, index)}
            />
          }
        </li>
      );
    });
  }

  render() {
    const { adding, list } = this.state;

    return (
      <StyleRoot>
        <ul>
          {this.renderList(list)}
        </ul>
        <form style={styles.form} onSubmit={this.addItem}>
          <input
            style={styles.input}
            name="newItem"
            placeholder="New list item"
          />
          <button
            style={[styles.button, adding ? styles.disabled : styles.active]}
            type="submit"
            disabled={adding}
          >
            {adding ?
              <Spinner style={styles.btnSpin} /> :
              <i style={styles.plus} className=" fa fa-plus" />
            }
            Add
          </button>
        </form>
      </StyleRoot>
    );
  }
}

const styles = {
  item: {
    marginBottom: 5,
  },
  icon: {
    color: '#f00',
    marginLeft: 10,
    transition: 'all 0.5s',
    ':hover': {
      color: '#0f0',
      cursor: 'pointer',
    },
  },
  spinner: {
    marginLeft: 10,
  },
  form: {
    overflow: 'auto',
  },
  input: {
    borderBottom: '1px solid #000',
    borderLeft: '1px solid #000',
    borderTop: '1px solid #000',
    boxSizing: 'border-box',
    float: 'left',
    fontSize: '1em',
    height: 30,
    paddingLeft: 10,
    width: 200,
  },
  button: {
    border: 0,
    boxSizing: 'border-box',
    color: '#fff',
    cursor: 'pointer',
    float: 'left',
    height: 30,
    transition: 'all 0.5s',
    width: 70,
    ':hover': {
      backgroundColor: '#0f0',
    },
  },
  active: {
    backgroundColor: '#00f',
  },
  disabled: {
    backgroundColor: '#efefef',
  },
  plus: {
    marginRight: 5,
  },
  btnSpin: {
    color: '#fff',
    marginRight: 5,
  },
};
