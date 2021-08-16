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
            width: '100%',
        },
        list: {
            width: '100%',
        },
        listItem: {
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
        }
    })
);

export default useStyles;
