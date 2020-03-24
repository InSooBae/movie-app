import React from 'react';
import styled from 'styled-components/native';
import { ActivityIndicator, Divider } from 'react-native-paper';
import Link from '../../components/Detail/Link';
import { formatDate } from '../../utils';
import ScrollContainer from '../../components/ScrollContainer';
import { apiImage } from '../../api';
import { Dimensions } from 'react-native';
import Poster from '../../components/Poster';
import Votes from '../../components/Votes';

const BG = styled.Image`
  width: 100%;
  height: 100%;
  opacity: 0.4;
  position: absolute;
`;

const Header = styled.View`
  height: ${Dimensions.get('window').height / 3}px;
  align-items: center;
  justify-content: flex-end;
`;

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  top: 30px;
`;

const Info = styled.View`
  width: 50%;
  margin-left: 40px;
`;

const Title = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 10px;
`;

const Data = styled.View`
  margin-top: 30px;
  padding: 0px 30px;
`;

const DataName = styled.Text`
  margin-top: 30px;
  color: white;
  opacity: 0.8;
  font-weight: 800;
  font-size: 17px;
  margin-bottom: 15px;
`;

const DataValue = styled.Text`
  color: white;
  opacity: 0.8;
  font-weight: 500;
`;

export default ({ openBrowser, result, loading }) => (
  <ScrollContainer
    loading={false}
    backgroundColor={result.backgroundColor}
    contentContainerStyle={{ paddingBottom: 80 }}
  >
    <>
      <Header>
        <BG source={{ uri: apiImage(result.backgroundImage, '-') }} />
        <Container>
          <Poster url={result.poster} />
          <Info>
            <Divider />
            <Title>{result.title}</Title>
            {result.votes ? <Votes votes={result.votes} /> : null}
            <Divider />
          </Info>
        </Container>
      </Header>
      <Data>
        {result.overview ? (
          <>
            <Divider />
            <DataName>Overview</DataName>
            <DataValue>{result.overview}</DataValue>
            <Divider />
          </>
        ) : null}
        {loading ? (
          <ActivityIndicator style={{ marginTop: 30 }} color={'white'} />
        ) : null}
        {result.spoken_languages ? (
          <>
            <Divider />
            <DataName>Languages</DataName>
            <DataValue>
              {result.spoken_languages.map(l => `${l.name} `)}
            </DataValue>
            <Divider />
          </>
        ) : null}
        {result.release_date ? (
          <>
            <Divider />
            <DataName>Release Date</DataName>
            <DataValue>{formatDate(result.release_date)}</DataValue>
            <Divider />
          </>
        ) : null}
        {result.status ? (
          <>
            <Divider />
            <DataName>Status</DataName>
            <DataValue>{result.status}</DataValue>
            <Divider />
          </>
        ) : null}
        {result.runtime ? (
          <>
            <Divider />
            <DataName>Runtime</DataName>
            <DataValue>{result.runtime} minutes</DataValue>
            <Divider />
          </>
        ) : null}
        {result.first_air_date ? (
          <>
            <Divider />
            <DataName>First Air Date</DataName>
            <DataValue>{formatDate(result.first_air_date)}</DataValue>
            <Divider />
          </>
        ) : null}
        {result.genres ? (
          <>
            <Divider />
            <DataName>Genres</DataName>
            <DataValue>
              {result.genres.map((g, index) =>
                index + 1 === result.genres.length ? g.name : `${g.name}, `
              )}
            </DataValue>
            <Divider />
          </>
        ) : null}
        {result.number_of_episodes ? (
          <>
            <Divider />
            <DataName>Seasons / Episodes</DataName>
            <DataValue>
              {result.number_of_seasons} / {result.number_of_episodes}
            </DataValue>
            <Divider />
          </>
        ) : null}
        {result.imdb_id ? (
          <>
            <Divider />
            <DataName>Links</DataName>
            <Link
              text={'IMDB Page'}
              icon={'imdb'}
              onPress={() =>
                openBrowser(`https://www.imdb.com/title/${result.imdb_id}`)
              }
            />
            <Divider />
          </>
        ) : null}
        {result.videos.results?.length > 0 ? (
          <>
            <Divider />
            <DataName>Videos</DataName>
            {result.videos.results.map(video => (
              <Link
                text={video.name}
                key={video.id}
                icon="youtube-play"
                onPress={() =>
                  openBrowser(`https://www.youtube.com/watch?v=${video.key}`)
                }
              />
            ))}
            <Divider />
          </>
        ) : null}
      </Data>
    </>
  </ScrollContainer>
);
