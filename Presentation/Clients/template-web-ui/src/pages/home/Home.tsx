import React, { useEffect } from "react";
import { Container } from "semantic-ui-react";
import CategorySlider from "./components/CategorySlide";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { fetchCategories } from "../../features/categorySlice";
import { useAppDispatch } from "../../hooks";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const categories = useSelector(
    (state: RootState) => state.category.categories
  );
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);
  return (
    <Container
      fluid
      style={{ padding: "50px 0", background: "#fff", width: "100%" }}
    >
      <CategorySlider categories={categories} />
    </Container>
  );
};

export default Home;
