import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection } from './common';
import ListItem from './ListItem';

class LibraryList extends Component {
  renderItem({ item }) {
    return <ListItem library={item} />;
  }

  render() {
    const { libraries } = this.props;

    return <FlatList
      data={libraries}
      renderItem={this.renderItem}
      keyExtractor={(library) => library.id }
    />;
  }
}

const mapStateToProps = ({ libraries }) => {
  return {
    libraries
  };
}

export default connect(mapStateToProps)(LibraryList);
