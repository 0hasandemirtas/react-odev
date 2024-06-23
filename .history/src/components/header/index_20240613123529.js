import React from 'react'
import useStyles from './stylesheet'

const Header = ()=>{
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div>
          <img src="./src/images/logo2.jpg"/>
      </div>
      <div><a>Anasayfa</a></div>
      
    </div>
  )
}

export default Header