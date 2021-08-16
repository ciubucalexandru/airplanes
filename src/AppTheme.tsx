import { createTheme } from '@material-ui/core/styles';

export const theme = createTheme({
    overrides: {
        MuiContainer: {
            maxWidthLg: {
                maxWidth: '80% !important',
            },
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 576,
            md: 960,
            lg: 1200,
            xl: 1920,
        },
    },
    palette: {
        primary: {
            light: '#9c4360',
            main: '#A01441',
            dark: '#5c0e27',
        },
        secondary: {
            light: '#b3d3df',
            main: '#56A3BC',
            dark: '#3f7e96',
        },
    },
});
