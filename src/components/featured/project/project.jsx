import React from "react";
import Styled from "styled-components";
import PropTypes from "prop-types";

const Container = Styled.div`
  width: 82%;
  height: 68rem;
  margin-left: 50%;
  transform: translateX(-50%);
`;

const Title = Styled.p`
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 1rem;
`;

const Summary = Styled.p`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #B3B6B7;
`;

const Details = Styled.p`
  font-size: 1.2rem; 
  margin-bottom: 1rem;
  font-weight: 700;
  color: #4D5656;
`;

const Link = Styled.a`
  display: block;
  font-size: 1.2rem; 
  margin-bottom: 3.5rem;
  color: #4D5656;
`;

const Video = Styled.video`
  position: relative;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
`;

const Fallback = Styled.p``;

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    const videoNode = this.videoRef.current;
    videoNode.playbackRate = 2.5;
  }

  render() {
    return (
      <Container>
        <Title>{this.props.title}</Title>
        <Summary>{this.props.summary}</Summary>
        <Details>Tech Stack - {this.props.details}</Details>
        <Link href={this.props.link}>{this.props.link}</Link>
        <Video innerRef={this.videoRef} src={this.props.source} autoPlay loop>
          <Fallback>Your browser does not support html5 video</Fallback>
        </Video>
      </Container>
    );
  }
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  details: PropTypes.string.details,
  link: PropTypes.string.link,
  source: PropTypes.string.isRequired
};

export default Project;
