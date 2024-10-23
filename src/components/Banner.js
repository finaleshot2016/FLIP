
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {


  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center text-dark">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__backInLeft" : ""}>
                <h1>{`$FLIP`}</h1>
                  <p>Frogs are often featured in various forms of art like Pepe of Matt furie and Oggie from a comic book, but did you know one of the OG animated frogs made its debut in 1930? Meet Flip the Frog, one of the first color sound cartoons!</p>
                  <p>CA: 0x3f10330e917661054D3e88dB3b50b7Eb363f0368 </p>
                  <div className="row pt-12">
                  <div className="col-6"><a href="https://app.uniswap.org/#/swap?outputCurrency=0x3f10330e917661054D3e88dB3b50b7Eb363f0368" type="button" class="btn btn-light btn-lg" onClick={() => console.log('connect')}>BUY NOW <ArrowRightCircle size={25} /></a></div>
                
                  </div>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomInDown" : ""}>
                  <img src={headerImg} alt="Header Img"/> 
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
