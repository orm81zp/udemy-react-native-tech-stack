import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection } from './common';

class LibraryList extends Component {
  renderList() {
    const { libraries } = this.props;

    return (
      <Card>
        {libraries.map((library) => {
          return (
            <CardSection key={library.id}>
              <Text>{library.title}</Text>
            </CardSection>
          )
        })}
      </Card>
    );
  }

  render() {
    return (
      <View>
        {this.renderList()}
      </View>
    );
  }
}

const mapStateToProps = ({ libraries }) => {
  return {
    libraries
  };
}

export default connect(mapStateToProps)(LibraryList);
