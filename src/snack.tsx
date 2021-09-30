import React, { Component } from "react";
import "./css/main-snake.css";

import * as SnackClass from './js/snake';

class SnackGame extends Component {
    componentDidMount() {
        // const SnackClass = require('./js/snake.js');
        console.log('===== RANDERED ======', SnackClass);

        const mySnakeBoard = new SnackClass.Board({
            boardContainer: "game-area",
            fullScreen: true
        });
        console.log('mySnakeBoard', mySnakeBoard);
    }

    render() {
        return (
            <div id="game-area" tabIndex={0}></div>
        )
    }
}

export default SnackGame;