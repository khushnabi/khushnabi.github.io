import classes from "./progress.module.scss";

// import styles from '../styles/Home.module.scs'

export default function Progress({ title, percentage }) {
  return (
    <>
        <h3 className={classes.title}>{title}</h3>
        <div className={classes.progress_div}>
            <div className={`${classes.progress} ${classes[percentage]}`}>

            </div>
        </div>
    </>
  )
}
