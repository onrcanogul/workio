import React from "react";
import { Container } from "semantic-ui-react";
import CategorySlider from "./components/CategorySlide";

const Home: React.FC = () => {
  return (
    <Container
      fluid
      style={{ padding: "50px 0", background: "#fff", width: "100%" }}
    >
      <CategorySlider />
    </Container>
  );
};

export default Home;
