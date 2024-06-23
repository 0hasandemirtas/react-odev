import React from 'react'
import useStyles from './stylesheet'

const Header = ()=>{
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <a>Anasayfa</a>
    </div>
  )
}

export default Header