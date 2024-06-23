import React from 'react';
import useStyles from './stylesheet';
import { Link } from 'react-router-dom';
const Header = ()=>{
  const classes = useStyles();
  return (
    <div className={classes.container}>
      
      <div className={classes.logoContainer}>
        <div>
          <img  className={classes.logo} src="./images/logo2.png" />
        </div>
        <div>
          <h2>Hasan Demirtaş</h2>
          <h3>Web Developer</h3>
        </div>
      </div>
      <div  className={classes.titleContainer}>
        <Link className={classes.titleContentContainer} to="/">Anasayfa</Link>
        <Link className={classes.titleContentContainer} to="/projects">Projelerim</Link>
        <Link className={classes.titleContentContainer} to="/about">Hakkımda</Link>
        <Link className={classes.titleContentContainer} to="/contact">İletişim</Link>
      </div>
      
    </div>
  )
}

export default Header