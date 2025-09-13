import { Song, SearchResult } from '../types';

const LRCLIB_API = 'https://api.lrclib.net';
const MUSICBRAINZ_API = 'https://musicbrainz.org/ws/2';

export async function searchLyrics(artist: string, title: string): Promise<SearchResult[]> {
  const response = await fetch(`${LRCLIB_API}/search?artist=${encodeURIComponent(artist)}&title=${encodeURIComponent(title)}`);
  if (!response.ok) throw new Error('Failed to fetch lyrics');
  return response.json();
}

export async function getSongMetadata(mbid: string): Promise<Song> {
  const response = await fetch(`${MUSICBRAINZ_API}/recording/${mbid}?fmt=json`);
  if (!response.ok) throw new Error('Failed to fetch song metadata');
  return response.json();
}