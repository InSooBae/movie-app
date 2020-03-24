import React from 'react';
import PropTypes from 'prop-types';
import { Searchbar } from 'react-native-paper';

const Input = ({ placeholder, value, onChange, onSubmit }) => (
  <Searchbar
    style={{
      marginHorizontal: 30,
      marginVertical: 0,
      paddingHorizontal: 10,
      marginBottom: 50
    }}
    theme={{ roundness: 30 }}
    placeholder={placeholder}
    returnKeyType={'search'}
    onChangeText={onChange}
    onSubmitEditing={onSubmit}
    value={value}
  />
);

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Input;
