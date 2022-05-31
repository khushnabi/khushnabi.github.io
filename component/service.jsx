import { useRef } from "react";
import {useInViewport} from 'react-in-viewport'
import clsx from "clsx";
import styles from './service.module.scss'

export default function Service() {
  return (
    <>
      <div className="d-flex mt-5">
          <div className={`${styles.service_box} ${styles.row_one}`}>
              <img src="/images/design.png" alt="" />
              <h2 className={styles.second_heading}>Web Design</h2>
              <p className={styles.para}>
              We Provide highly scalable and performant web application made with html css and vue.js
              </p>
          </div>
          <div className={`${styles.service_box} ${styles.row_two}`}>
          <img src="/images/develop.png" alt="" />
          <h2 className={styles.second_heading}>Web Development</h2>
          <p className={styles.para}>
              We Provide highly scalable and performant web application made with html css and vue.js
              </p>
             
             
          </div>
      </div>
    </>
  )
}
