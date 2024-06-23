import React from 'react'
import logo2 from ".../src/images/logo2"
import useStyles from './stylesheet'

const Header = ()=>{
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div>
          <img src="logo2" alt="Logo"/>
      </div>
      <div><a>Anasayfa</a></div>
      
    </div>
  )
}

export default Header