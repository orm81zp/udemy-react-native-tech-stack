import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  LayoutAnimation,
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  renderDescription() {
    const { expanded, library } = this.props;
    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>{library.description}</Text>
        </CardSection>
      )
    }
  }

  render() {
    const { selectLibrary, library } = this.props;
    const { titleStyle } = styles;

    return (
      <TouchableWithoutFeedback onPress={() => selectLibrary(library.id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{library.title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
});

const mapStateToProps = ({ selectedLibraryId }, { library: { id }}) => ({
  expanded: selectedLibraryId === id
})


export default connect(mapStateToProps, actions)(ListItem);
