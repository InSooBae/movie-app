import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

const ScrollContainer = ({ loading, children, backgroundColor }) => (
  <ScrollView
    style={{ backgroundColor: backgroundColor }}
    contentContainerStyle={{
      flex: loading ? 1 : 0,
      justifyContent: loading ? 'center' : 'flex-start'
    }}
  >
    {loading ? <ActivityIndicator color="white" size="small" /> : children}
  </ScrollView>
);

ScrollContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};

export default ScrollContainer;
