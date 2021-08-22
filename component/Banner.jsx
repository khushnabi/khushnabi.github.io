import Loader from "./Loader";
import classes from "../styles/Home.module.scss"
import LoaderAgain from "./LoaderAgain"

// import styles from '../styles/Home.module.scs'

export default function Banner() {
  return (
    <div>
   
    <div className={classes.main_banner}>
        <div className={classes.container}>
          <div className={classes.banner_content}>
            <div className={classes.banner_text}>
              <h1 className={classes.heading}>khushnabi</h1>
              <h4 className={classes.second_heading}>ui/ux developer</h4>
              <p className={classes.about}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero laboriosam voluptatum incidunt! Enim est quos distinctio dolore. M voluptatum incidunt! Enim est quos distinctio dolore. M</p>

            </div>
           <div className={classes.banner_img_contaner}>
          
              <img src="/images/hacker.jpg" alt="sdfasdfa" />
            </div>

          </div>

        </div>

    </div>


    <div className="spacer container">
    <div className={classes.profile_section}>
        <div className={classes.profile}>
          <h1 className={classes.second_heading}>Profile</h1>
          <p className={classes.about}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo fuga sed sit fugit voluptate corrupti quis totam modi sapiente, delectus laborum. Exercitationem rem quis ratione libero repudiandae obcaecati quasi accusamus?</p>

        </div>
        
        <div className={classes.education}>
        <h1 className={classes.second_heading}>Education</h1>
          <div className={classes.education_specific}>
            <div>
                <button className={classes.badge}>2014-2020</button>
            </div>
            <div>
              <p className={classes.about}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore incidunt voluptas  </p>

            </div>
          </div>
          <div className={classes.education_specific}>
          <div>
                <button className={classes.badge}>2014-2020</button>
            </div>
            <div>
              <p className={classes.about}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore incidunt voluptas ncidunt voluptas  </p>

            </div>
          </div>

        </div>

    </div>
       

    </div>

    <div className="spacer container">
    <Loader></Loader>

    <div className="spacer">
    <LoaderAgain />
    </div>
    
    

    </div>
    </div>
    
  )
}
