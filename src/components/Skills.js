
import 'react-multi-carousel/lib/styles.css';

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Skills = () => {


  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">            

                    <div className="skill-bx wow zoomIn">       
                    <TrackVisibility>
              {({ isVisible }) =>
                        <h2 className={isVisible ? "animate__animated animate__lightSpeedInRight" : ""}>$FLIP TOKENOMICS</h2>}
                        </TrackVisibility> <br/>
                        <TrackVisibility>
              {({ isVisible }) =>
                        <p className={isVisible ? "animate__animated animate__lightSpeedInLeft" : ""}>CA: <br /> TOTAL SUPPLY: 1,000,000,000
                    </p>}
                        </TrackVisibility>

                    </div>     
                </div>
            </div>
        </div>   
    </section>
  )
}
