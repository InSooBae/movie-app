import React from 'react';
import styled from 'styled-components/native';
import Swiper from 'react-native-web-swiper';
import { Dimensions } from 'react-native';
import { Text } from 'react-native-paper';
import Slide from '../../components/Movies/Slide';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Vertical from '../../components/Vertical';
import Horizontal from '../../components/Horizontal';
import ScrollContainer from '../../components/ScrollContainer';
import HorizontalSlider from '../../components/HorizontalSlider';
import List from '../../components/List';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('screen');

const SliderContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 3}px;
  margin-bottom: 40px;
`;

const Container = styled.View``;

export default ({ loading, nowPlaying, popular, upcoming }) => (
  <ScrollContainer loading={loading} backgroundColor={'#1e2465'}>
    <>
      <SliderContainer>
        <Swiper
          controlsProps={{
            dotsTouchable: true,
            prevPos: 'bottom-left',
            nextPos: 'bottom-right',
            nextTitle: 'Next',
            dotsPos: false,
            nextTitleStyle: {
              color: 'red',
              fontSize: 14,
              fontWeight: '500'
            },
            PrevComponent: ({ onPress }) => (
              <TouchableOpacity onPress={onPress}>
                <Text
                  style={{ color: 'tomato', fontSize: 14, fontWeight: '500' }}
                >
                  {'Prev'}
                </Text>
              </TouchableOpacity>
            )
          }}
          loop
          timeout={4}
        >
          {nowPlaying.map(movie => (
            <Slide
              key={movie.id}
              id={movie.id}
              title={movie.original_title}
              overview={movie.overview}
              votes={movie.vote_average}
              backgroundImage={movie.backdrop_path}
              poster={movie.poster_path}
            />
          ))}
        </Swiper>
      </SliderContainer>
      <Container>
        <HorizontalSlider title={'Popular Movies'}>
          {popular.map(movie => (
            <Vertical
              id={movie.id}
              key={movie.id}
              poster={movie.poster_path}
              title={movie.title}
              votes={movie.vote_average}
            />
          ))}
        </HorizontalSlider>

        <List title="Coming Soon">
          {upcoming.map(movie => (
            <Horizontal
              key={movie.id}
              id={movie.id}
              title={movie.title}
              releaseDate={movie.release_date}
              poster={movie.poster_path}
              overview={movie.overview}
            />
          ))}
        </List>
      </Container>
    </>
  </ScrollContainer>
);
