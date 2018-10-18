import React from "react";
import Styled from "styled-components";

import Project from "./project/project.jsx";
import TaskTrackerVid from "../../../public/images/tasktracker_example.mov";

const Container = Styled.div`
  margin-bottom: 30rem;
 `;

const Featured = () => {
  return (
    <Container>
      <Project
        title={"Task Tracker"}
        summary={"A tool that improves workflows."}
        link={"https://bit.ly/2IObIKi"}
        source={TaskTrackerVid}
      />
    </Container>
  );
};

export default Featured;
