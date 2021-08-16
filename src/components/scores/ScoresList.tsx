import { Container, Grid, List, ListItem, Typography } from '@material-ui/core';
import React from 'react';
import { getAllGames } from '../../util/gamesStorage';
import { OneGame } from '../../util/types';
import useStyles from './ScoresList.styles';

const ScoresList: React.FC = () => {

    const classes = useStyles();
    const scores: OneGame[] = getAllGames();

    return (
        <Container className={classes.container}>
            <Grid container className={classes.gridContainer}>
                <Grid item md={12}>
                    <List className={classes.list}>
                        {scores.map((score) => (
                            <ListItem className={classes.listItem}>
                                <Typography variant="h6">
                                    {score.date}
                                </Typography>
                                <Typography variant="body1">
                                    {score.duration}
                                </Typography>
                                <Typography variant="body1">
                                    Duration{score.numberOfClicks}
                                </Typography>
                                <Typography variant="body1">
                                    {score.isFinished ? 'Finished' : 'Not Finished'}
                                </Typography>
                            </ListItem>
                        ))}
                    </List>
                </Grid>
            </Grid>
        </Container>
    );
}

export default ScoresList;
