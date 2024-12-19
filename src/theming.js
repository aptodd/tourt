import { createTheme } from '@mui/material/styles'

const theme = createTheme({
	typography: {
        fontFamily: ["myriad-variable"]
    },
    palette: {
        mode: 'light',
        primary: {
            light: "#857367",
            main: "#E2774A",
            dark: "#0a0a08",
        },
        text: {
            primary: "#E97C3B",
            //primary: "#0a0a08",
            secondary: "#F98F3C"
        }
    }
})

export default theme