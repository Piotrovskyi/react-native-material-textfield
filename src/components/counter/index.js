import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default class Counter extends PureComponent {
  static propTypes = {
    count: PropTypes.number.isRequired,
    limit: PropTypes.number,

    fontSize: PropTypes.number,

    baseColor: PropTypes.string.isRequired,
    errorColor: PropTypes.string.isRequired,

    style: Text.propTypes.style,
    allowFontScaling: PropTypes.bool,
  };

  render() {
    let { count, limit, baseColor, errorColor, fontSize, style, ...props } = this.props;

    let textStyle = {
      color: count > limit ? errorColor : baseColor,
      fontSize,
    };

    if (!limit) {
      return null;
    }

    return (
      <View style={styles.container}>
        <Text style={[styles.text, style, textStyle]} {...props}>
          {count} / {limit}
        </Text>
      </View>
    );
  }
}
