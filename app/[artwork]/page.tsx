"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import styled from "styled-components";
import ArtworkCard from "@/components/ArtworkCard";

const ContentWrapper = styled.main`
  width: 80vw;
  margin: auto;
  background-color: #f5f5f5;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  color: #2c3e50;
  font-family: Arial, sans-serif;
  margin-bottom: 1.5rem;
`;

export default function ArtworkPage() {
  const params = useParams();
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (params.artwork) {
      fetch(`/api/getArtworkData?artwork=${params.artwork}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to fetch data");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    }
  }, [params.artwork]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const artworks = data.records || [];

  return (
    <ContentWrapper>
      <Title>Artwork Details for {params.artwork}</Title>
      {artworks.map((artwork: any, index: number) => (
        <ArtworkCard key={index} artwork={artwork} />
      ))}
    </ContentWrapper>
  );
}
