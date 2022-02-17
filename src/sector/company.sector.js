import React from "react";
import "../css/company.sector.scss";

const CompanySector = () => {
  return (
    <div className="company-div">
      <p className="txt-title">Work Experience</p>
      <div className="sub-company-div">
        <div className="div-role">
          <p className="txt-company-name">Blackwood Seven A/S</p>
          <p className="txt-company-role">Full-Stack Developer</p>
        </div>
        
        <ul className="ul-point">
          <li className="li-point">
            Perfect understanding of NFT and build Drop Minting feature.
          </li>
          <li className="li-point">
            Build Front End and Back End with React and NestJS.
          </li>
          <li className="li-point">
            Worked with an agile team of 5 members and provided end-to- end solutions for clients.
          </li>
          <li className="li-point">
            Experience in Smart Contract (erc20, 721, and 1155) and in- depth knowledge with Remix, Truffle, and HardHat.
          </li>
          <li className="li-point">
            Rich experience and in-depth knowledge in GitHub.
          </li>
          <li className="li-point">
            Extension experience building DApps(Web3 and Ether)
          </li>
        </ul>
      </div>

      <div className="sub-company-div">
        <div className="div-role">
          <p className="txt-company-name">Livatek A/S</p>
          <p className="txt-company-role">BackEnd developer</p>
        </div>
        
        <ul className="ul-point">
          <li className="li-point">
            Experience building some front-end pages in Laravel.
          </li>
          <li className="li-point">
            In-depth knowledge and rich skills with MySQL integration.
          </li>
          <li className="li-point">
            Build validation check with Data component.
          </li>
          <li className="li-point">
            Rich experience with build and maintenance databases.
          </li>
        </ul>
      </div>

      <div className="sub-company-div">
        <div className="div-role">
          <p className="txt-company-name">Tieto DK A/S</p>
          <p className="txt-company-role">FrontEnd Developer</p>
        </div>
        
        <ul className="ul-point">
          <li className="li-point">
            Built frontend using ReactJS/TypeScript.
          </li>
          <li className="li-point">
            Rich experience with css such as animation
          </li>
          <li className="li-point">
            Call API to integrate backend.
          </li>
          <li className="li-point">
            Simple and high speed code and maintenance.
          </li>
          <li className="li-point">
            Mastered HTML/CSS.
          </li>
        </ul>
      </div>

      <div className="sub-company-div">
        <div className="div-role">
          <p className="txt-company-name">Cognizant Technology Solutions Denmark ApS</p>
          <p className="txt-company-role">BlockChain Developer</p>
        </div>
        
        <ul className="ul-point">
          <li className="li-point">
            Using Web3, ability to respond to multiple wallets. 
          </li>
          <li className="li-point">
            Multi thread to mint NFT automatically.
          </li>
          <li className="li-point">
            Monitoring all transactions and analyze it. 
          </li>
          <li className="li-point">
            Ability to integrate all contracts using a config file.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CompanySector;