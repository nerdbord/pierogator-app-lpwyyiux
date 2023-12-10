import styled from "styled-components";

const DumplingTile = styled.div`
  display: flex;
  flex-direction: column;
`;
const MiniImage = styled.img`
  width: 162px;
  height: 110px;
  object-fit: cover;
`;

export default function Tile() {
  return (
    <DumplingTile>
      <img></img>
    </DumplingTile>
  );
}
