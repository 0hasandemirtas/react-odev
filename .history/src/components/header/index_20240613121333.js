import React from 'react'
import useStyles from './stylesheet'

const Header = ()=>{
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div><span>Anasayfa</span></div>
      <div></div>
      
    </div>
  )
}

export default Header