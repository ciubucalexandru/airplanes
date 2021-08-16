import { Button, Container, Grid, Modal, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { addNewGame, formatDate } from '../../util/gamesStorage';
import useStyles from './AirplanesGame.styles';
import GameCell from './gameCell/GameCell';

const initialGameGrid = [
    ['', 'A', '', '', '', '', '', '', '', ''],
    ['A', 'A', 'A', '', '', '', '', '', '', ''],
    ['', 'A', '', '', '', '', '', '', '', ''],
    ['A', 'A', 'A', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
];

const upToNine = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const aToJ = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

const AirplanesGame: React.FC = () => {

    const classes = useStyles();

    const [isFinished, setIsFinished] = useState(false);
    const [gameGrid, setGameGrid] = useState(initialGameGrid);
    const [numberOfClicks, setNumberOfClicks] = useState(0);
    const [canExit, setCanExit] = useState(false);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    });

    useEffect(() => {
        if (!gameGrid.reduce((acc, item) => {
            return (acc + item.join(''));
        }, '').includes('A')) {
            setIsFinished(true);
        }
    }, [gameGrid]);

    const checkHit = (row: number, column: number) => {

        const newGameGrid = [...gameGrid];
        switch (gameGrid[row][column]) {
            case 'A':
                newGameGrid[row][column] = 'X';
                setGameGrid(newGameGrid);
                setNumberOfClicks((prevClicks) => prevClicks + 1);
                console.log(newGameGrid);
                break;
            case '':
                newGameGrid[row][column] = 'O';
                setGameGrid(newGameGrid);
                setNumberOfClicks((prevClicks) => prevClicks + 1);
                break;
            case 'X':
            default:
                break;
        }
    }

    if (canExit) {

        addNewGame({ date: formatDate(new Date()), isFinished: isFinished, numberOfClicks: numberOfClicks, duration: seconds });

        return (
            <Redirect to="/home" />
        );
    }

    return (
        <>
            <Modal open={isFinished}>
                <Container className={classes.modalContainer}>
                    <Typography variant="h3">
                        Congratulations! You've won!
                    </Typography>
                    <Button className={classes.exitButton} onClick={() => setCanExit(true)}>
                        Play Again
                    </Button>
                </Container>
            </Modal>
            <Container className={classes.container}>
                <Grid container>
                    <Grid item md={1} className={classes.sideColumn}>
                        {upToNine.map((index) => (
                            <div className={classes.sideIndex}>
                                {index}
                            </div>
                        ))}
                    </Grid>
                    <Grid item md={10}>
                        <div className={classes.topRow}>
                            {aToJ.map((char) => (
                                <div className={classes.topIndex}>
                                    {char}
                                </div>
                            ))}
                        </div>
                        <div className={classes.gameGrid}>
                            {upToNine.map((rowIndex) => (
                                <div key={`RowNr${rowIndex}`} className={classes.row}>
                                    {upToNine.map((cellIndex) => (
                                        <GameCell
                                            isFinished={isFinished}
                                            character={gameGrid[rowIndex][cellIndex]}
                                            row={rowIndex}
                                            column={cellIndex}
                                            onClick={(r, c) => checkHit(r, c)}
                                            key={`CellIndex${rowIndex}${cellIndex}`}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </Grid>
                    <Grid item md={1} className={classes.buttonContainer}>
                        <Button className={classes.exitButton} onClick={() => setCanExit(true)}>
                            Exit
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default AirplanesGame;
