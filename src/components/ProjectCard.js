import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link, href }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="img" /> 
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>  
          <a href={href} target="_blank" rel="noreferrer"><h5>{link}</h5></a>         
        </div>
      </div>
    </Col>
  )
}
