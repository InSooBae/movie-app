import React from 'react';
import styled from 'styled-components/native';
import Swiper from 'react-native-web-swiper';
import { ActivityIndicator } from 'react-native-paper';
import Slide from '../../components/Movies/Slide';
const Container = styled.View`
  flex: 1;
  background-color: #1e2465;
  justify-content: center;
`;

const Section = styled.View`
  background-color: red;
  height: 100%;
`;

const Text = styled.Text``;

export default ({ loading, nowPlaying }) => (
  <Container>
    {loading ? (
      <ActivityIndicator color="white" size="small" />
    ) : (
      <>
        <Swiper controlsEnabled={false} loop timeout={3}>
          {nowPlaying.map(movie => (
            <Slide
              key={movie.id}
              id={movie.id}
              title={movie.original_language}
              overview={movie.overview}
              votes={movie.vote_average}
              backgroundImage={movie.backdrop_path}
            />
          ))}
        </Swiper>
      </>
    )}
  </Container>
);
