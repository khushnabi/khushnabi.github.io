import { useRef } from "react";
import classes from "./progress.module.scss";
import {useInViewport} from 'react-in-viewport'
import clsx from "clsx";
// import styles from '../styles/Home.module.scs'

export default function Progress({ title, percentage }) {
  const ref = useRef();
  const {inViewport} = useInViewport(ref, {rootMargin: '0px',
  threshold: 1.0}, {}, {});
  console.log({inViewport})
  return (
    <>
    <h3 className={classes.title}>{title}</h3>
        <div ref={ref} className={clsx(classes.progress_div, {[classes.animate]: inViewport})} >
            <div className={`${classes.progress} ${classes[percentage]}`}>

            </div>
        </div>
    </>
  )
}
