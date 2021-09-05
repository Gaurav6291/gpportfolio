import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProjectImg from '../upGradProject.png';

const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 330px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid grey;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: black;
    color:darkgray;
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2.2rem;
    color: greenyellow;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }
  .tech{
    /* display: flex; */
    border: 1px solid floralwhite;
    margin-bottom: 5%;
    
  }
  .btndiv > button{
    border-top: 3px solid red;
    border-bottom: 3px solid black;
    background-color: rosybrown;
  }
  .btndiv > button:hover{
    /* border:px solid red; */
    border-radius: 5px;
    border-top: 3px solid black;
    border-bottom: 3px solid red;

  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;

export default function ProjectItem({
  img = ProjectImg,
  title = 'Project Name',
  desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  href = 'something',
  href1 = "dsr",
  tech = "sfs",
}) {
  return (
    <ProjectItemStyles>
      <Link to="/projects" className="projectItem__img">
        <img src={img} alt="project img" />
      </Link>
      <div className="projectItem__info">
       
          <h3 className="projectItem__title">{title}</h3>
        
        <p className="projectItem__desc">{desc}</p>
        <div className="tech"><p style={{fontSize:"large", textAlign:"center"}}>Tech Used :-</p><p style={{fontSize:"medium", textAlign:"center"}}>{tech}</p></div>
        <div className="btndiv" style={{display:"flex", flexDirection:"row", justifyContent:"space-between", marginLeft:"10px", marginRight:"10px", fontSize:"medium"}}>
         <button> <a href={href} target="_blank" rel="noreferrer" style={{textDecoration:"none", color:"black"}}>Code </a></button>
        <button><a href={href1} target="_blank" rel="noreferrer" style={{textDecoration:"none", color:"black"}}>Link</a></button>
        </div>
      </div>
    </ProjectItemStyles>
  );
}