import React from 'react'
import useStyles from './stylesheet'

const classes=useStyles();
function index() {
  return (
    <div className={classes.c}>index</div>
  )
}

export default index