import React from 'react'
import useStyles from './stylesheet'

const Header = ()=>{
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <span>Anasayfa</span>
    </div>
  )
}

export default Header