import react from "../assets/img/react.png";
import javascript from "../assets/img/javascript.png";
import css from "../assets/img/css.png";
import html from "../assets/img/html.png";
import git from "../assets/img/git.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={html} alt="Img" /> 
                                <h4>HTML</h4>                              
                            </div>
                            <div className="item">
                                <img src={css} alt="Img" />   
                                <h4>CSS</h4> 
                            </div>
                            <div className="item">
                                <img src={javascript} alt="Img" />   
                                <h4>JavaScript</h4> 
                            </div>
                            <div className="item">
                                <img src={react} alt="Img" />  
                                <h4>React</h4>                          
                            </div>
                            <div className="item">
                                <img src={git} alt="Img" />  
                                <h4>Git</h4>                          
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Img" />
    </section>
  )
}
