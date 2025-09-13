export interface Song {
  id: string;
  title: string;
  artist: string;
  duration: number;
  lyrics?: string[];
}

export interface SearchResult {
  mbid: string;
  title: string;
  artist: string;
  hasLyrics: boolean;
}

export interface PlayerState {
  isPlaying: boolean;
  currentTime: number;
  currentLine: number;
}