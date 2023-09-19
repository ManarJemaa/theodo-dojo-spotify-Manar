import { SavedTrack, SpotifyType } from 'spotify-types';

const apiToken =
  'BQAublQN-YyZqbwYOUAg2X1tDydVej79bhuA1CYQE7xdNHpK-kcg4X_dOTo2ISPLe-CCDsaaUYXfgMHe194MWi1IC_XD8vIJpwrjBdWzLYIfZ6ARrv6q2yS27BDrf8wnrctzDXKbqVDCNGDqTALZxPy0kjvI-ALW0cqPKs9l1I5Vs-rTRD2yohTqMSMJzw1qMLlLjqAVWrXSNXOH7P8WCj9Nj7pAm9FDuw';

export const fetchTracks = async (): Promise<SavedTrack> => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
    throw new Error(`Fetching tracks failed with status ${response.status}`);
  }
  const data = (await response.json()) as { items: SavedTrack };
  return data.items;
};
