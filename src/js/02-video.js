import '../css/common.css';

import Player from '@vimeo/player';

import { throttle } from 'lodash';

const TIME_KEY = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

refresh();


const onPlay = function(data) {
    const strigifiedData = JSON.stringify(data);
    localStorage.setItem(TIME_KEY, strigifiedData); 
};


player.on('timeupdate', throttle(onPlay,1000));

function refresh(){
    if(JSON.parse(localStorage.getItem(TIME_KEY))['seconds']===null){
        return;
    }
    const pausedTime = JSON.parse(localStorage.getItem(TIME_KEY))['seconds'];

    if(pausedTime){
        player.setCurrentTime(pausedTime).then(function(seconds) {
          }).catch(function(error) {
            switch (error.name) {
                case 'RangeError':
                break;
                default:
                break;
            }
          });
    }
}


