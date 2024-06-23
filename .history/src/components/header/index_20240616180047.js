import React from 'react';
import useStyles from './stylesheet';

const Header = ()=>{
  const classes = useStyles();
  return (
    <div className={classes.container}>
      
      <div className={classes.logoContainer}>
        <div>
          <img  className={classes.logo} src="./images/logo2.png" />
        </div>
        <div>
          <p>Hasan Demirtaş</p>
          <p>Web Developer</p>
        </div>
      </div>
      <div  className={classes.titleContainer}>
        <a className={classes.titleContentContainer} href='#'>Anasayfa</a>
        <a className={classes.titleContentContainer} href='#'>Projelerim</a>
        <a className={classes.titleContentContainer} href='#'>Hakkımda</a>
        <a className={classes.titleContentContainer} href='#'>İletişim</a>
      </div>
      
    </div>
  )
}

export default Header