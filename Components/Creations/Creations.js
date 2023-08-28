import React from 'react'
import classes from './Creations.module.css'

const Creations = () => {
  return (
    <div className={classes.creations}>
        <div className={classes.header}>
            <h1>Our Creations</h1>
            <p>See All</p>
        </div>

        <div className={classes.grid}>
            <div className={`${classes.grid1} ${classes.gridAll}`}><h2>deep earth</h2></div>
            <div className={`${classes.grid2} ${classes.gridAll}`}><h2>Night Arcade</h2></div>
            <div className={`${classes.grid3} ${classes.gridAll}`}><h2>Soccer Team VR</h2></div>
            <div className={`${classes.grid4} ${classes.gridAll}`}><h2>THe Grid</h2></div>
            <div className={`${classes.grid5} ${classes.gridAll}`}><h2>Fromup above vr</h2></div>
            <div className={`${classes.grid6} ${classes.gridAll}`}><h2>Pocket Borealis</h2></div>
            <div className={`${classes.grid7} ${classes.gridAll}`}><h2>The curiosity</h2></div>
            <div className={`${classes.grid8} ${classes.gridAll}`}><h2>Make it fisheye</h2></div>

        </div>
    </div>
  )
}

export default Creations