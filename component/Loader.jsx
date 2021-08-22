import classes from "../styles/Home.module.scss"

// import styles from '../styles/Home.module.scs'

export default function Loader() {
  return (
    <div className={classes.loader}>
        <div className={`${classes.circle} ${classes.expert}`} >
            <div className={classes.outer_circle}></div>
            <div className={classes.inner_circle}></div>
            <div className={`${classes.box} ${classes.box_top_left} `} ></div>
            <div className={`${classes.box } ${classes.box_bottom_left} `}></div>
            <div className={`${classes.box } ${classes.box_bottom_right}`}></div>
            <div className={`${classes.box} ${classes.box_top_right} `}></div>

        </div>

    </div>
  )
}
