import React from "react";
import Styled from "styled-components";

import Project from "./project/project.jsx";
import TaskTrackerVid from "../../../public/images/tasktracker_example.mp4";
import BoostImg from "../../../public/images/boost.png";

const Container = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-bottom: 10rem;
  width: 100vw;
`;

const Featured = () => {
  return (
    <Container>
      <Project
        title={"Task Tracker"}
        summary={"A tool that improves workflows."}
        source={{ type: "video", src: TaskTrackerVid }}
      />
      <Project
        title={"BoostPT"}
        summary={
          "A platform for tracking workouts and connecting with personal trainers"
        }
        source={{ type: "image", src: BoostImg }}
      />
    </Container>
  );
};

export default Featured;
