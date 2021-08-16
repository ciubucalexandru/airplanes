import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        gridContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '400px',
        },
        button: {
            marginBottom: theme.spacing(10),
            width: '100%',
            minHeight: '80px',
            backgroundColor: theme.palette.secondary.main,
            color: 'white',
            '&:hover': {
                color: theme.palette.secondary.main,
            }
        }
    })
);

export default useStyles;
