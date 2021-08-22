import classes from "../styles/Home.module.scss";

// import styles from '../styles/Home.module.scs'

export default function LoaderAgain() {
  return (
    <div className={classes.progress_container}>
         <div className={classes.circular}>
        <div className={classes.inner}></div>
        <div className={classes.circle}>
            <div className={`${classes.bar} ${classes.left}`}>
                <div className={classes.progress}>

                </div>
            </div>
            <div className={`${classes.bar} ${classes.right}`}>
                <div className={classes.progress}>

                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
