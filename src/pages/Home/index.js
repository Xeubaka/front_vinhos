import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

import Header from '../../components/header/';
import Content from './components/content';

const useStyles = makeStyles( (theme) =>  ({
    toolBar: {
        minHeight: 64
    },
    paper: theme.paper,
    main: theme.main,
    content: theme.content(theme)
}));

function Home(props) {
    const classes = useStyles();
    
    return ( 
        <div className={classes.paper}>
            <Header/>
            <main className={classes.main}>
                <Container maxWidth='lg'>
                    <Box m={2}>
                        <Paper className={classes.content}>
                           <Content classes/>
                        </Paper>
                    </Box>
                </Container>
            </main>
        </div>    
    );
}

export default Home;