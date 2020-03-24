import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { Button } from 'react-native-paper';
import Poster from '../Poster';
import { apiImage } from '../../api';
import Votes from '../Votes';
import { Platform } from 'react-native';
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

const VotesContainer = styled.View``;

const Overview = styled.Text`
  color: rgb(220, 220, 220);
  font-size: 14px;
  font-weight: 500;
`;

const Slide = ({
  id,
  title,
  backgroundImage,
  votes,
  overview,
  poster,
  navigation
}) => (
  <Container>
    <BG source={{ uri: apiImage(backgroundImage) }} />
    <Content>
      <Poster url={apiImage(poster)} />
      <Data>
        <Title>{title.length > 30 ? `${title.slice(0, 30)}...` : title}</Title>
        <VotesContainer>
          <Votes votes={votes} />
        </VotesContainer>
        <Overview>{overview.slice(0, 110)}...</Overview>
        <Button
          style={Platform.OS === 'web' ? { marginTop: 15 } : { marginTop: 5 }}
          color="#e74c3c"
          theme={{ roundness: 3 }}
          mode="contained"
          uppercase={false}
          compact={true}
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