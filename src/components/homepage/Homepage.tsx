import { Button, Container, Grid, Input } from '@material-ui/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useStyles from './Homepage.styles';

type Props = {
    gridSize: number;
    setGridSize: (size: number) => void;
}

const Homepage: React.FC<Props> = ({ gridSize, setGridSize }) => {

    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Grid container className={classes.gridContainer}>
                <Grid item md={3}>
                    <input value={gridSize} onChange={(e) => {
                        setGridSize(Number(e.target.value))}
                     } />
                    <Link to="/game" component={Button} className={classes.button}>
                        Play
                    </Link>
                    <Link to="/scores" component={Button} className={classes.button}>
                        Scores
                    </Link>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Homepage;
