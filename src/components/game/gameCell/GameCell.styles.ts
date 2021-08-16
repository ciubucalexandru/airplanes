import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        cell: {
            width: '10%',
            height: '73px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: 'groove',
            borderColor: 'grey',
        }
    })
);

export default useStyles;
