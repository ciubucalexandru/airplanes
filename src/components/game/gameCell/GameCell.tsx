import { Icon } from '@material-ui/core';
import React from 'react';
import useStyles from './GameCell.styles';
import ClearIcon from '@material-ui/icons/Clear';

type Props = {
    isFinished: boolean;
    character: string;
    row: number;
    column: number;
    onClick: (row: number, column: number) => void;
}

const GameCell: React.FC<Props> = ({ isFinished, character, row, column, onClick }) => {

    const classes = useStyles();

    let backgroundColor;
    let icon;

    switch (character) {
        case 'A':
            backgroundColor = 'white';
            icon = '';
            break;
        case 'O':
            backgroundColor = 'blue';
            icon = '';
            break;
        case 'X':
            backgroundColor = 'red';
            icon = 'close';
            break;
        case '':
        default:
            backgroundColor = 'white';
            icon = '';
            break;
    }

    return (
        <div className={classes.cell} onClick={() => isFinished ? {} : onClick(row, column)} style={{ backgroundColor: backgroundColor }}>
            {icon ? (<ClearIcon />) : ''}
        </div>
    );
}

export default GameCell;
