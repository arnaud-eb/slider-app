import * as React from "react";
import styled from "styled-components";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

import Review from "./Review";
import reviews from "../assets/data";

type ButtonProps = {
  left?: boolean;
  right?: boolean;
};

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
  overflow: hidden;
`;

const Button = styled.button<ButtonProps>`
  position: absolute;
  top: 200px;
  transform: translateY(-50%);
  background: var(--clr-grey-5);
  color: var(--clr-white);
  width: 1.25rem;
  height: 1.25rem;
  display: grid;
  place-items: center;
  border-color: transparent;
  font-size: 1rem;
  border-radius: var(--radius);
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    background: var(--clr-primary-5);
  }

  ${(p) => (p.left ? "left: 0;" : "right: 0;")}

  @media (min-width: 800px) {
    width: 2rem;
    height: 2rem;
    font-size: 1.5rem;
  }
`;

const limit = (num: number) => {
  if (num > reviews.length) return 1;
  if (num < 1) return reviews.length;
  return num;
};

const Reviews = () => {
  const [index, setIndex] = React.useState(1);

  const next = () => {
    setIndex((prevIndex) => limit(prevIndex + 1));
  };

  const prev = () => {
    setIndex((prevIndex) => limit(prevIndex - 1));
  };

  React.useEffect(() => {
    const id = setInterval(() => {
      next();
    }, 5000);

    return () => {
      clearInterval(id);
    };
  }, [index]);

  return (
    <ReviewsContainer>
      {reviews.map((review) => (
        <Review key={review.id} {...review} index={index} />
      ))}
      <Button
        left
        onClick={() => {
          prev();
        }}
      >
        <FiChevronLeft />
      </Button>
      <Button
        right
        onClick={() => {
          next();
        }}
      >
        <FiChevronRight />
      </Button>
    </ReviewsContainer>
  );
};

export { limit };
export default Reviews;
