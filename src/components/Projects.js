import { Container} from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  return (
    <section className="project">
      <Container>
        <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeInBottomRight" : ""}>
                <h2>HOW TO BUY $FLIP?</h2>
                <p>1. TRANSFER ETH TO YOUR METAMASK WALLET THROUGH ETH CHAIN. <br/> 2. CONNECT YOUR WALLET TO UNISWAP AND PASTE $FLIP CONTRACT ADDRESS <br/> 3. BUY $FLIP! <br/> 4. HODL AND ENJOY THE PUMP! <br/> <br/><br/>It is imperative for individuals interested in purchasing the $FLIP token to ensure they are checking the correct contract address (CA) associated with the token. Failure to verify the correct contract address may result in purchasing the wrong token. Therefore, it is strongly advised that users exercise caution and double-check the CA before proceeding with any transactions involving $FLIP tokens.</p>
              </div>}
        </TrackVisibility>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="/"></img>
      <Container>
              <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeInBottomLeft" : ""}>
                <h2 className="pt-44" id="projects">Chart</h2>
              </div>}
        </TrackVisibility>

      <div className="ratio ratio-16x9">
                  <iframe src="https://dexscreener.com/ethereum/0x7a58efc79e6a8668c2b3838c0b0d328f39c86aec" title="dexscreener" allowfullscreen></iframe>
              </div>          <br /><br />

              

      </Container>
    </section>
    
  )
}


