import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  margin: 1rem;
  width: 250px;
  border: none;
  border-radius: 12px;
  background: linear-gradient(135deg, #ecf0f1, #ffffff);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 0.75rem;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
`;

const Info = styled.p`
  font-size: 0.95rem;
  color: #34495e;
  margin: 0.25rem 0;
  text-align: center;
  line-height: 1.4;

  strong {
    font-weight: 700;
  }
`;

type Artwork = {
  title?: string;
  culture?: string;
  period?: string;
  medium?: string;
};

type ArtworkCardProps = {
  artwork: Artwork;
};

export default function ArtworkCard({ artwork }: ArtworkCardProps) {
  return (
    <CardWrapper>
      <Title>{artwork.title || "Untitled"}</Title>
      <Info>
        <strong>Culture:</strong> {artwork.culture || "N/A"}
      </Info>
      <Info>
        <strong>Period:</strong> {artwork.period || "N/A"}
      </Info>
      <Info>
        <strong>Medium:</strong> {artwork.medium || "N/A"}
      </Info>
    </CardWrapper>
  );
}
