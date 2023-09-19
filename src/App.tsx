import logo from './assets/logo.svg';
import './App.css';
import { useState } from 'react';

import { fetchTracks } from './lib/fetchTracks.ts';
import { useQuery } from '@tanstack/react-query';
import { SavedTrack, SpotifyType } from 'spotify-types';

const App = () => {
  const [trackIndex, setTrackIndex] = useState(0);
  const goToNextTrack = () => {
    setTrackIndex(trackIndex + 1);
  };
  const { data: tracks } = useQuery({
    queryKey: ['tracks'],
    queryFn: fetchTracks,
  });
  const AlbumCover = ({ track }) => {
    const src = track;
    return <img src={src} style={{ width: 400, height: 400 }} />;
  };

  //const trackUrls = tracks.map(track => track.track.preview_url);
  console.log(tracks[0]);
  if (tracks === undefined) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Bienvenue sur le blind test</h1>
      </header>
      <div className="App-images">
        <AlbumCover track={tracks[0]?.track.album.images[0].url} />
        <p>Hola</p>
        <p>{trackIndex}</p>
      </div>
      <div className="App-buttons"></div>
      <audio src={tracks[0]?.track.preview_url} autoPlay controls />
      <button onClick={goToNextTrack}>Next track</button>
    </div>
  );
};

export default App;
