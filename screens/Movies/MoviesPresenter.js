import React from 'react';
import styled from 'styled-components/native';
import Swiper from 'react-native-web-swiper';
import { View, Dimensions } from 'react-native';
import { ActivityIndicator, Text } from 'react-native-paper';
import Slide from '../../components/Movies/Slide';
import Title from '../../components/Title';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Vertical from '../../components/Vertical';
import Horizontal from '../../components/Horizontal';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('screen');

const SliderContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 4}px;
  margin-bottom: 40px;
`;

const Container = styled.View``;

const UpcomingContainer = styled.View`
  margin-top: 20px;
`;

export default ({ loading, nowPlaying, popular, upcoming }) => (
  <ScrollView
    style={{
      backgroundColor: '#1e2465'
    }}
    contentContainerStyle={{
      flex: loading ? 1 : 'auto',
      justifyContent: loading ? 'center' : 'flex-start'
    }}
  >
    {loading ? (
      <ActivityIndicator color="white" size="small" />
    ) : (
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
          <Title title={'Popular Movies'} />
          <ScrollView
            style={{ marginTop: 20, marginBottom: 40 }}
            contentContainerStyle={{ paddingLeft: 30 }}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {popular.map(movie => (
              <Vertical
                id={movie.id}
                key={movie.id}
                poster={movie.poster_path}
                title={movie.title}
                votes={movie.vote_average}
              />
            ))}
          </ScrollView>
          <Title title={'Coming Soon'}></Title>
          <UpcomingContainer>
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
          </UpcomingContainer>
        </Container>
      </>
    )}
  </ScrollView>
);
