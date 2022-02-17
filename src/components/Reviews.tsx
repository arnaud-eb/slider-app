import * as React from "react";
import styled from "styled-components";

import Review from "./Review";
import reviews from "../assets/data";

const ReviewsContainer = styled.section`
  margin: 0 auto;
  margin-top: 4rem;
  width: 80vw;
  /* have to have a height */
  height: 450px;
  max-width: 800px;
  text-align: center;
  position: relative;
  display: flex;
  /* overflow: hidden; */
`;

const Reviews = () => {
  const [index, setIndex] = React.useState(1);

  return (
    <ReviewsContainer>
      {reviews.map((review) => (
        <Review key={review.id} {...review} index={index} />
      ))}
    </ReviewsContainer>
  );
};

export default Reviews;
