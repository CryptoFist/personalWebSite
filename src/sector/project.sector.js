import React from "react";
import "../css/project.sector.scss";
import vikingswap from "../assets/vikingswap.png";
import invaluable from "../assets/invaluable.png";

const ProjectSector = () => {
  return (
    <div className="project-div">
      <p className="txt-title">BlockChain Projects</p>
      <div className="sub-project-div">
        <div className="div-img">
          <img className="img-project-logo" src={vikingswap} />
        </div>
        <div className="div-description">
          <p className="txt-project-name">Viking Swap</p>
          <p className="txt-project-description">Yield farms for the warriors of Valhalla on BSC!</p>
          <a
            href="https://www.vikingswap.finance/"
            target="_blank"
            className="project-link"
          >
            Click here to visit site
          </a>
        </div>
      </div>

      <div className="sub-project-div">
        <div className="div-img">
          <img className="img-project-logo" src={invaluable} />
        </div>
        <div className="div-description">
          <p className="txt-project-name">Invaluable MarketPlace</p>
          <p className="txt-project-description">            
            INVALUABLE is a utility driven NFT marketplace created by collectors for collectors featuring our own metaverse, the INVALUABLE CLUB: a digital playground that brings collectors, artists, musicians, athletes, and brands together through an interactive and immersive experience.
          </p>
          <a
            href="https://dev.invaluable.market/"
            target="_blank"
            className="project-link"
          >
            Click here to visit site
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectSector;