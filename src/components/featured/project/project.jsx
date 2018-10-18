import React from "react";
import Styled from "styled-components";
import PropTypes from "prop-types";

const Container = Styled.div`
  width: 100%;
  height: 68rem;
  margin-left: 50%;
  transform: translateX(-50%);

  @media only screen and (max-width: 64em) {
    height: 45rem;
  }

  @media only screen and (max-width: 48em) {
    height: 35rem;
  }

  @media only screen and (max-width: 27em) {
    height: 15rem;
  }
`;

const Title = Styled.p`
  color: #fff;
  font-size: 3.8rem;
  font-weight: 900;
  padding-bottom: 1rem;

  @media only screen and (max-width: 62.5em) {
    font-size: 2.7rem;
  }

  @media only screen and (max-width: 47em) {
    font-size: 2.3rem;
  }

  @media only screen and (max-width: 27em) {
    font-size: 2rem;
  }
`;

const Summary = Styled.p`
  font-size: 2.3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #B3B6B7;

  @media only screen and (max-width: 62.5em) {
    font-size: 1.8rem;
  }

  @media only screen and (max-width: 47em) {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 27em) {
    font-size: 1.3rem;
  }
`;

const Details = Styled.div`
  width: 50rem;
  height: 16rem;
  background-color: #011118;
  margin-bottom: 4rem;

  @media only screen and (max-width: 62.5em) {
    height: 14rem;
    width: 40rem;
  }

  @media only screen and (max-width: 47em) {
    height: 12rem;
    width: 32rem;
  }

  @media only screen and (max-width: 27em) {
    height: 11rem;
    width: 100%;
  }
`;

const DetailsContainer = Styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 5rem;

  @media only screen and (max-width: 27em) {
    text-align: center;
  }
`;

const Link = Styled.a`
  font-size: 1.5rem; 
  margin-bottom: 3.5rem;
  color: #ECF0F1;

  @media only screen and (max-width: 62.5em) {
    font-size: 1.4rem;
  }

  @media only screen and (max-width: 47em) {
    font-size: 1.2rem;
  }

  @media only screen and (max-width: 27em) {
    font-size: 1rem;
  }
`;

const Video = Styled.video`
  position: relative;
  width: 82%;
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
        <Details>
          <DetailsContainer>
            <Title>{this.props.title}</Title>
            <Summary>{this.props.summary}</Summary>
            <Link href={this.props.link} target={"_blank"}>
              {this.props.link}
            </Link>
          </DetailsContainer>
        </Details>
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
  link: PropTypes.string.link,
  source: PropTypes.string.isRequired
};

export default Project;
