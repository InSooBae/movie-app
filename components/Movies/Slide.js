import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import Poster from '../Poster';
import { apiImage } from '../../api';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
const Container = styled.View`
  height: 100%;
  width: 100%;
`;

const BG = styled.Image`
  height: 100%;
  width: 100%;
  opacity: 0.4;
  position: absolute;
`;

const Content = styled.View`
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const Data = styled.View`
  width: 50%;
  align-items: flex-start;
`;

const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 19px;
  margin-bottom: 10px;
`;

const Votes = styled.Text`
  color: rgb(220, 220, 220);
  margin-bottom: 7px;
  font-size: 12px;
`;

const Overview = styled.Text`
  color: rgb(220, 220, 220);
  font-size: 14px;
  font-weight: 500;
`;

const Slide = ({ id, title, backgroundImage, votes, overview, poster }) => (
  <Container>
    <BG source={{ uri: apiImage(backgroundImage) }} />
    <Content>
      <Poster url={apiImage(poster)} />
      <Data>
        <Title>{title.slice(0, 30)}</Title>
        <Votes>⭐️ {votes} / 10</Votes>
        <Overview>{overview.slice(0, 120)}</Overview>
        <Button
          style={{ marginTop: 10, marginBottom: 5 }}
          color="#e74c3c"
          theme={{ roundness: 10 }}
          mode="contained"
          uppercase={false}
          onPress={() => console.log('Pressed')}
        >
          View details
        </Button>
      </Data>
    </Content>
  </Container>
);

Slide.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired
};

export default Slide;
