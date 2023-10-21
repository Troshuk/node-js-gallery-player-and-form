import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const STORAGE_PLAYER_TIME_KEY = 'videoplayer-current-time';
const storedTime = localStorage.getItem(STORAGE_PLAYER_TIME_KEY);

if (storedTime) {
  player.setCurrentTime(storedTime);
}

player.on(
  'timeupdate',
  throttle(function ({ seconds }) {
    localStorage.setItem(STORAGE_PLAYER_TIME_KEY, seconds);
  }, 1000)
);
