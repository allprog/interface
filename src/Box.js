import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
});

function Box(props) {
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={4}>
        <Typography variant="title"  component="h3">
        POSIÇÃO:
        </Typography>
        <Typography variant="title"  component="h3">
        BEACON:
        </Typography>
        <Typography variant="title"  component="h3">
        HORA: 
        </Typography>
        <Typography variant="title"  component="h3">
        MODO DE RASTREIO: 
        </Typography>
      </Paper>
    </div>
  );
}

Box.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Box);
