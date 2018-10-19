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

  @media only screen and (min-width: 95em) {
    height: 85rem;
  }

  @media only screen and (min-width: 120em) {
    height: 95rem;
  }

  @media only screen and (min-width: 160em) {
    height: 140rem;
  }
`;

const Title = Styled.p`
  color: #fff;
  font-size: 3.8rem;
  font-weight: 900;
  padding-bottom: 1rem;

  @media only screen and (max-width: 62.5em) {
    font-size: 3.4rem;
  }

  @media only screen and (max-width: 47em) {
    font-size: 2.7rem;
  }

  @media only screen and (max-width: 27em) {
    font-size: 2.2rem;
  }

  @media only screen and (min-width: 120em) {
    font-size: 4.2rem;
  }

  @media only screen and (min-width: 160em) {
    font-size: 6rem;
  }
`;

const Summary = Styled.p`
  font-size: 2.3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #B3B6B7;

  @media only screen and (max-width: 62.5em) {
    font-size: 2rem;
  }

  @media only screen and (max-width: 47em) {
    font-size: 1.7rem;
  }

  @media only screen and (max-width: 27em) {
    font-size: 1.5rem;
  }

  @media only screen and (min-width: 120em) {
    font-size: 2.4rem;
  }

  @media only screen and (min-width: 160em) {
    font-size: 3.4rem;
  }
`;

const Details = Styled.div`
  width: 50rem;
  height: 14rem;
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

  @media only screen and (min-width: 120em) {
    height: 18rem;
  }

  @media only screen and (min-width: 160em) {
    width: 65rem;
    height: 26rem;
    margin: 8rem 0;
  }
`;

const DetailsContainer = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 5rem;

  @media only screen and (max-width: 27em) {
    text-align: center;
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
  source: PropTypes.string.isRequired
};

export default Project;
