import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { DumplingData } from "../pages/GalleryPage";
import { GenerateButton } from "./MainHeader";

const DumplingTile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const MiniImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

const TileInterface = styled.div`
  display: flex;
  gap: 8px;
`;

export type TileProps = {
  data: DumplingData;
  editable: boolean;
  onDelete?: (id: number) => void;
};

export default function Tile(props: TileProps) {
  const [imageHeight, setImageHeight] = useState("100%");
  const imageRef = useRef<HTMLImageElement>(null);
  const navigate = useNavigate();
  const handleTileClick = () => {
    if (!props.editable) {
      navigate(`/dumpling_preview/${props.data._id}`);
    }
  };
  const handleOpenClick = () => {
    navigate(`/dumpling_preview/${props.data._id}`);
  };

  const TileH3 = styled.h3`
    color: var(--dark-green, #002902);
  `;

  useEffect(() => {
    if (imageRef.current !== null) {
      const newHeight = Math.round(imageRef.current.width * 0.679012345679);
      setImageHeight(`${newHeight}px`);
    }
  }, []);

  return (
    <DumplingTile onClick={handleTileClick}>
      <MiniImage
        ref={imageRef}
        src={props.data.imageSrc}
        style={{
          height: `${imageHeight}`,
        }}
      ></MiniImage>
      <TileH3>{props.data.name.length > 40 ? props.data.name : props.data.name.slice(0, 40)}</TileH3>
      {props.editable && (
        <TileInterface>
          <GenerateButton onClick={handleOpenClick}>Otwórz</GenerateButton>
          <GenerateButton onClick={() => props.onDelete && props.onDelete(props.data._id)}>Usuń</GenerateButton>
        </TileInterface>
      )}
    </DumplingTile>
  );
}
