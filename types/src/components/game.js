import * as React from 'react';
import webGame from '../assets/img/webGame.png';
import vrGame from '../assets/img/vrGame.png';

export default function game() {
    return (
        <div className="main-part">
            <div className='ali-c x-64'>
                Coming Soon...
            </div>
            <div className='game-list'>
                <div className='game-list-item'>
                    <img src={webGame} />
                    <p className='ali-c x-64 abs'>WEB</p>
                </div>
                <div className='game-list-item'>
                    <img src={vrGame} />
                    <p className='ali-c x-64 abs'>VR</p>
                </div>
            </div>
        </div>
    )
}