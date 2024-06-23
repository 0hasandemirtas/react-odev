import React from 'react'
import useStyles from './stylesheet'

const Header = ()=>{
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div>
          <img className={classes.logo} src="./src/images/logo2.png"/>
      </div>
      <div><a>Anasayfa</a></div>
      
    </div>
  )
}

export default Header