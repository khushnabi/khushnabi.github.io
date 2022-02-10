import classes from "./timeline.module.scss";

export default function TimeLine( ) {
  return (
    <div className={classes.timeline}>
         <div className={classes.timeline_div_container}>
              <div className={classes.company_section}>
                <div>
                <div>
                <div className={classes.my_position}>
                Web designer
               </div>
                     <div className={classes.company_name}>
                     Legally Advice
                     </div>
                   
                     <div className={`${classes.about} ${classes.company_about}`}>
                   Legally Advice is a legal needs website, Whether you are looking for a Lawyer or you are a Lawyer,
                     </div>
                  </div>
                  <p className={classes.start}>started_at: <b> Mar 2021</b></p>
                <p className={classes.end}>end_at : <b>  Present</b> </p>
                </div>
               </div>
               <div className={classes.timeline_empty_div}>

               </div>
           </div>

           <div className={classes.timeline_div_container}>
               <div className={`${classes.timeline_empty_div} ${classes.timeline_empty_div_odd}`}>
               </div>
               <div className={`${classes.company_section} ${classes.company_section_odd}`}>
                 <div>
                 <div>
                 <div className={classes.my_position}>
                  Web Developer
               </div>
                     <div className={classes.company_name}>
                     Legally Advice
                     </div>
                     <div className={`${classes.about} ${classes.company_about}`}>
                   Legally Advice is a legal needs website, Whether you are looking for a Lawyer or you are a Lawyer,
                     </div>
                  </div>
                  <p className={classes.start}>started_at: <b> Mar 2021</b></p>
                <p className={classes.end}>end_at : <b>  Present</b> </p>
                 </div>
               </div>
           </div>

          
   
    </div>
  )
}
