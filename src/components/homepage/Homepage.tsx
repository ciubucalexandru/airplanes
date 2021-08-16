import { Button, Container, Grid } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from './Homepage.styles';

const Homepage: React.FC = () => {

    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Grid container className={classes.gridContainer}>
                <Grid item md={3}>
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
