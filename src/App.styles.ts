import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    topLevelContainer: {
      height: window.innerHeight,
      width: window.innerWidth,
      backgroundColor: theme.palette.primary.main,
    }
  })
);

export default useStyles;