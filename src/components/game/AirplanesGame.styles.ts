import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        sideColumn: {
            marginTop: theme.spacing(10),
        },
        sideIndex: {
            width: '100%',
            height: '78px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        gameGrid: {
            border: 'solid',
            borderColor: 'black',
        },
        row: {
            display: 'flex',
            flexDirection: 'row',
            minHeight: '75px',
            width: '100%',
        },
        topRow: {
            display: 'flex',
            flexDirection: 'row',
            textAlign: 'center',
            minHeight: '75px',
            width: '100%',
        },
        topIndex: {
            width: '10%',
        },
        buttonContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        exitButton: {
            margin: theme.spacing(2),
            width: '100%',
            minHeight: '80px',
            backgroundColor: theme.palette.secondary.main,
            color: 'white',
            '&:hover': {
                color: theme.palette.secondary.main,
            }
        },
        modalContainer: {
            marginTop: theme.spacing(40),
            backgroundColor: theme.palette.primary.main,
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
        },
        modalButton: {
            margin: theme.spacing(2),
            width: '60%',
            minHeight: '80px',
            backgroundColor: theme.palette.secondary.main,
            color: 'white',
            '&:hover': {
                color: theme.palette.secondary.main,
            }
        },
    })
);

export default useStyles;
