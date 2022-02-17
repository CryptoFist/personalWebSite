import React from "react";
import "../css/intro.sector.scss";
import myAvatar from "../assets/me.jpg";

const IntroSector = () => {
  return (
    <div className="intro-div">
      <div className="div-wrap">
        <div className="div-bio">
          <p className="txt-bio">
          Experienced Full Stack Developer adept in all stages of advanced web development. <br/>
          Over 5 experience with React, Vue, Angular, Node, Nest, and Next. <br/>
          Now I work as a BlockChain developer and mastered Smart contract and DApps. <br/>
          Can build, deploy and test smart contracts and DApps. <br/>
          Able to effectively self-manage during independent projects, as well as collaborate in a team setting.
          </p>
        </div>

        <div className="div-avatar">
          <img className="img-avatar" src={myAvatar} />
        </div>
      </div>
    </div>
  )
}

export default IntroSector;