import classes from "./timeline.module.scss";

// import styles from '../styles/Home.module.scs'

export default function TimeLine( ) {
  return (
    <div className={classes.timeline}>
       <div className={classes.timeline_div}>
              
          <div className={classes.company}>
              
              <div>
                 <div className={classes.company_name}>
                     someghing
                 </div>
                 <div className={`${classes.about} ${classes.company_about}`}>
                         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo placeat commodi possimus 
                 </div>
              </div>
              <p className={classes.start}>started_at: <b> 2/14/2020</b></p>
            <p className={classes.end}>end_at : <b>pergent</b> </p>
           </div>

        
           <div className={classes.timeline_company_line_dot}></div>
           <div className={classes.timeline_company_line}></div>

          <div className={classes.timeline_line}></div>

          <div className={classes.date}>
            
          </div>
        
       </div>

       <div className={classes.timeline_div}>

          <div className={classes.date}>
                
                
          </div>

          <div className={classes.timeline_line}></div>
        
          <div className={classes.timeline_company_line}></div>

          <div className={classes.timeline_company_line_dot}></div>



          <div className={`${classes.company} ${classes.company_second_row}`}>
            <div>
                <div className={classes.company_name}>
                    someghing
                </div>
                <div className={`${classes.about} ${classes.company_about}`}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo placeat sdfas asdf asf adfa commodi possimus 
                </div>
             </div>
             <p className={classes.start}>started_at: <b> 2/14/2020</b></p>
                <p className={classes.end}>end_at : <b>pergent</b> </p>
          </div>
       </div>


       <div className={classes.timeline_div}>
              
          <div className={classes.company}>
              
              <div>
                 <div className={classes.company_name}>
                     someghing
                 </div>
                 <div className={`${classes.about} ${classes.company_about}`}>
                         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo placeat commodi possimus 
                 </div>
              </div>
              <p className={classes.start}>started_at: <b> 2/14/2020</b></p>
            <p className={classes.end}>end_at : <b>pergent</b> </p>
           </div>

        
           <div className={classes.timeline_company_line_dot}></div>
           <div className={classes.timeline_company_line}></div>

          <div className={classes.timeline_line}></div>

          <div className={classes.date}>
            
          </div>
        
       </div>

    </div>
  )
}
