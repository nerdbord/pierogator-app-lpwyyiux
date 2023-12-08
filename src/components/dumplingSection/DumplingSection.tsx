import styled from "styled-components";

const dumplingSectionInterface = styled.div``;

export default function DumplingSection() {
  return (
    <div className="dumpling-section">
      <div className="dumpling-section-interface">
        <h2 className="interface-title">Pieróg</h2>
        <button className="interface-generate-button">Generuj</button>
      </div>
      <div className="dumpling-section-photo">{/* wygenerowane img, jak to tutaj dać?*/}</div>
      <div className="dumpling-section-title-wrapper">
        <h5 className="title-desc">Nazwa/Nic</h5>
        <div className="title">Piróg papiróg</div>
      </div>
    </div>
  );
}
