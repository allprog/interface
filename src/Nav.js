import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import SetIcon from '@material-ui/icons/Settings';
import DescIcon from '@material-ui/icons/Description';
import Box from './Box';



const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});


function Nav(props) {

  const { classes } = props;
  return (
    <header className={classes.root}>
    
    <Box />
      <Divider />
      <List component="nav">
        <ListItem button component="a" href="#simple-list">
          <ListItemIcon>
          
            <DescIcon />
          </ListItemIcon>
          <ListItemText primary="MANUAL TRACK" />
        </ListItem>
        <ListItem button component="a" href="#simple-list">
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="TARGET TRACK" />
        </ListItem>
        <ListItem button component="a" href="#simple-list">
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="STEP TRACK" />
        </ListItem>
        <ListItem button component="a" href="#simple-list">
          <ListItemIcon>
            <SetIcon />
          </ListItemIcon>
          <ListItemText primary="CONFIGURAÇÕES" />
        </ListItem>

      </List>
      
    </header>
  );
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Nav);