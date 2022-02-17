import * as React from "react";
import styled from "styled-components";
import { FaQuoteRight } from "react-icons/fa";

import { ReviewType } from "../assets/data";

interface ReviewProps extends ReviewType {
  index: number;
}

interface ReviewContainerProps {
  idReview: ReviewProps["id"];
  indexReview: ReviewProps["index"];
}

const ReviewContainer = styled.article<ReviewContainerProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: var(--transition);

  ${(p) =>
    p.idReview === p.indexReview &&
    `
    opacity: 1;
    transform: translateX(0);
  `}

  ${(p) =>
    p.idReview === p.indexReview - 1 &&
    `
    transform: translateX(-100%);
  `}

  ${(p) =>
    p.idReview === p.indexReview + 1 &&
    `
    transform: translateX(100%);
  `}
`;

const Img = styled.img`
  border-radius: 50%;
  margin-bottom: 1rem;
  width: 150px;
  height: 150px;
  object-fit: cover;
  border: 4px solid var(--clr-grey-8);
  box-shadow: var(--dark-shadow);
`;

const Name = styled.h4`
  text-transform: uppercase;
  color: var(--clr-primary-5);
  margin-bottom: 0.25rem;
`;

const ReviewTitle = styled.p`
  text-transform: capitalize;
  margin-bottom: 0.75rem;
  color: var(--clr-grey-3);
`;

const Quote = styled.p`
  max-width: 35em;
  margin: 0 auto;
  margin-top: 2rem;
  line-height: 2;
  color: var(--clr-grey-5);

  @media (min-width: 800px) {
    max-width: 45em;
  }
`;

const Icon = styled(FaQuoteRight)`
  font-size: 3rem;
  margin-top: 1rem;
  color: var(--clr-primary-5);
`;

function Review({ id, image: img, name, title, quote, index }: ReviewProps) {
  return (
    <ReviewContainer idReview={id} indexReview={index}>
      <Img src={img} alt={name} />
      <Name>{name}</Name>
      <ReviewTitle>{title}</ReviewTitle>
      <Quote>{quote}</Quote>
      <Icon />
    </ReviewContainer>
  );
}

export default Review;
