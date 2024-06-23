import React from 'react';
//import logo2 from './logo2.png';
import useStyles from './stylesheet';

const Header = ()=>{
  const classes = useStyles();
  return (
    <div className={classes.container}>
      
      <div>
          <img  className={classes.logo} src="./images/logo2.png" />
      </div>
      <div>
        <div className={classes.titleContainer}><a>Anasayfa</a></div>
        <div className={classes.titleContainer}><a>Anasayfa</a></div>
        <div className={classes.titleContainer}><a>Anasayfa</a></div>
        <div className={classes.titleContainer}><a>Anasayfa</a></div>
      </div>
      
    </div>
  )
}

export default Header