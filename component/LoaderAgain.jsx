import classes from "./loader.module.scss";

// import styles from '../styles/Home.module.scs'

export default function LoaderAgain( { title, percentage } ) {
  return (
    <div className={classes.progress_container}>
         <div className={classes.circular}>
        <div className={classes.inner}></div>
        <div className={classes.number}>{title}</div>
        <div className={classes.circle}>
            <div className={`${classes.bar} ${classes.left}`}>
                <div className={` ${classes.progress} ${classes[percentage]}`}>
                </div>
            </div>
            <div className={`${classes.bar} ${classes.right}`}>
                <div className={` ${classes.progress} ${classes[percentage]}`}>

                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
