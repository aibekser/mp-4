"use client";

import styled from "styled-components";
import { useState } from "react";
import Link from "next/link";

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #8e44ad, #3498db);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  padding: 3rem;
  width: 400px;
  text-align: center;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
`;

const TitleName = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #2c3e50;
  font-family: "Montserrat", sans-serif;
`;

const Description = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: #34495e;
`;

const Instructions = styled.div`
  font-size: 0.9rem;
  margin-bottom: 2rem;
  color: #2c3e50;
  font-family: "Montserrat", sans-serif;
  text-align: left;
  line-height: 1.4;

  a {
    color: #3498db;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s;

    &:hover {
      color: #2980b9;
    }
  }
`;

const StyledInput = styled.input`
  padding: 0.75rem 1rem;
  width: 100%;
  border: 2px solid #ddd;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: #3498db;
  }
`;

const StyledLink = styled(Link)`
  background: #3498db;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-size: 1.1rem;
  transition: background 0.3s;

  &:hover {
    background: #2980b9;
  }
`;

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Container>
      <Card>
        <TitleName>Discover Harvard Art!</TitleName>
        <Description>Enter an artwork identifier to view details.</Description>
        <Instructions>
          To search for artwork, try one of the following valid artwork numbers:
          <br />
          • <strong>3.2002.2655.4</strong> –{" "}
          <a
            href="https://harvardartmuseums.org/collections/object/6139?position=6139"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Harvard Art Museums
          </a>
          <br />
          • <strong>3.2002.2073.1</strong> –{" "}
          <a
            href="https://harvardartmuseums.org/collections/object/11525?position=11525"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Harvard Art Museums
          </a>
          <br />
          • <strong>1.1965.6</strong> –{" "}
          <a
            href="https://harvardartmuseums.org/collections/object/188938?position=188938"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Harvard Art Museums
          </a>
          <br />
          You can also use any other valid artwork identifier available from the Harvard Art Museums.
        </Instructions>
        <StyledInput
          type="text"
          value={searchQuery}
          placeholder="e.g., 334889"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <StyledLink href={`/${searchQuery}`}>Find Artwork</StyledLink>
      </Card>
    </Container>
  );
}
