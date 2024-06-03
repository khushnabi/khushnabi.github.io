import classes from "./timeline.module.scss";

export default function TimeLine() {
  return (
    <>
      <div className={classes.timeline}>
        <div className={classes.timeline_div_container}>
          <div
            className={`${classes.timeline_empty_div} ${classes.timeline_empty_div_odd}`}
          ></div>
          <div
            className={`${classes.company_section} ${classes.company_section_odd}`}
          >
            <div>
              <div>
                <div className={classes.my_position}>Web Designer</div>
                <div className={classes.company_name}>Jomifi</div>
                <p> 05/2021 - 10/2022</p>

                <p>
                  Legally Advice is a legal needs website, Whether you are
                  looking for a Lawyer or you are a Lawyer,
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.timeline_div_container}>
          <div
            className={`${classes.timeline_empty_div} ${classes.timeline_empty_div_odd}`}
          ></div>
          <div
            className={`${classes.company_section} ${classes.company_section_odd}`}
          >
            <div>
              <div>
                <div className={classes.my_position}>
                  frontend Developer Intern
                </div>
                <div className={classes.company_name}>
                  <a target="blank" href="https://djtcorp.in/">
                    {" "}
                    Djt Corporation & Investment
                  </a>
                </div>
                <p>10/2022 - 03/2023</p>
                <ul>
                  <li>
                    Spearhead frontend development efforts across multiple
                    projects, including admin panel and website development,
                    ensuring consistent high-quality user experiences.
                  </li>
                  <li>
                    Architect and implement responsive and feature-rich user
                    interfaces
                  </li>
                  <li>
                    Proficiently manage Nginx proxy setups within Docker
                    containers
                  </li>
                  <li>
                    Effectively connect APIs using Axios to enhance website
                    features, ensuring smooth communication between the frontend
                    and backend.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.timeline_div_container}>
          <div
            className={`${classes.timeline_empty_div} ${classes.timeline_empty_div_odd}`}
          ></div>
          <div
            className={`${classes.company_section} ${classes.company_section_odd}`}
          >
            <div>
              <div>
                <div className={classes.my_position}>
                  frontend Developer executive
                </div>
                <div className={classes.company_name}>
                  <a target="blank" href="https://djtcorp.in/">
                    {" "}
                    Djt Corporation & Investment
                  </a>
                </div>
                <p> 03/2023 - Present</p>
                <ul>
                  <li>
                    Spearhead frontend development efforts across multiple
                    projects, including admin panel and website development,
                    ensuring consistent high-quality user experiences.
                  </li>
                  <li>
                    Architect and implement responsive and feature-rich user
                    interfaces
                  </li>
                  <li>
                    Proficiently manage Nginx proxy setups within Docker
                    containers
                  </li>
                  <li>
                    Effectively connect APIs using Axios to enhance website
                    features, ensuring smooth communication between the frontend
                    and backend.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
