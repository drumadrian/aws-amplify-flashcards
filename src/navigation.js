import React from 'react';
import clsx from 'clsx';

import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';

import { mainListItems, secondaryListItems } from './listItems';
import useStyles from './material-styles';

const TopAndSideNavigation = function() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
      setOpen(true);
    };
    
    const handleDrawerClose = () => {
      setOpen(false);
    };
  
    return (
      <React.Fragment>
        <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
          <Toolbar className={classes.toolbar}>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
              AWS Flash Cards Amplify Web App
              <br></br>More info at <a href='http://awsflashcards.io' target='new'>awsflashcards.io</a> and <a href='https://w.amazon.com/bin/view/AWS_Enterprise_Support_Flashcards/' target='new'>Amazon Internal Wiki</a>
            </Typography>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
};

export default TopAndSideNavigation;