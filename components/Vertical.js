import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Poster from './Poster';
import Votes from './Votes';
import { trimText } from '../utils';

const Container = styled.View`
  align-items: center;
  margin-right: 20px;
`;

const Title = styled.Text`
  color: white;
  font-weight: 500;
  margin: 10px 0px 5px 0px;
`;

const Vertical = ({
  isTv = false,
  id,
  poster,
  title,
  votes,
  backgroundColor
}) => {
  const navigation = useNavigation();
  const goToDetai = () => {
    navigation.navigate('Detail', {
      isTv,
      id,
      title,
      poster,
      votes,
      backgroundColor
    });
  };
  return (
    <TouchableOpacity onPress={goToDetai}>
      <Container>
        <Poster url={poster} />
        <Title>{trimText(title, 10)}</Title>
        {votes > 0 && <Votes votes={votes} />}
      </Container>
    </TouchableOpacity>
  );
};

Vertical.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string,
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired
};

export default Vertical;
