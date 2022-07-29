import React, { useRef, useState } from "react";
import "./App.css";
import logo from "./assets/logo.jpg";
import mh from "./assets/MH.png";
import mh1 from "./assets/mh1.jpg";
import mh2 from "./assets/mh2.jpg";
import mh3 from "./assets/mh3.jpg";
import mh4 from "./assets/mh4.jpg";
import mh5 from "./assets/mh5.jpg";
import icon1 from "./assets/icon-1.png";
import icon2 from "./assets/icon-2.png";
import icon3 from "./assets/icon-3.png";
import reverie from "./assets/reverie-finished.png";
import unknown from "./assets/unknown.png";
import spotify from "./assets/spotify-pink.png";
import footer1 from "./assets/footer-1.png";
import footer2 from "./assets/footer-2.png";
import footer3 from "./assets/footer-3.png";
import footer4 from "./assets/footer-4.png";

import { Collapse, Slider } from "antd";
import {
  PlusOutlined,
  MinusOutlined,
  TwitterSquareFilled,
  LinkedinFilled,
} from "@ant-design/icons";
import { connect, mint } from "./mint";

const { Panel } = Collapse;

function App() {
  const musiciansRef = useRef(null);
  const benefitsRef = useRef(null);
  const mintRef = useRef(null);
  const musiciansScroll = () =>
    musiciansRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  const benefitsScroll = () =>
    benefitsRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  const mintScroll = () =>
    mintRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

  const [headsCount, setHeadsCount] = useState(1);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [status, setStatus] = useState("");
  const [loader, setLoader] = useState(false);
  const [isETH, setIsETH] = useState(true);

  const handleConnect = () => {
    connect()
      .then((result) => {
        setIsAuthenticated(result);
      })
      .catch((err) => {
        setIsAuthenticated(err);
      });
  };

  const handleMint = async () => {
    let result = new Promise((resolve, reject) => {
      mint(resolve, reject);
    });

    setLoader(true);
    result
      .then((status) => {
        setStatus(status);
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
        setStatus(err);
        setLoader(false);
      });
  };

  return (
    <div className="App">
      <section className="desktop-nav">
        <a href="#">
          <img className="logo" src={logo} alt="logo" />
        </a>
        <p className="mh">MUSICHEADS</p>
      </section>
      <section className="entry-wrapper">
        <div className="entry">
          <img src={mh} alt="music-heads" className="img" />
          <p className="mh-text">
            Shape the future of music culture by joining our members-only
            community centered around collective music ownership, exclusive
            experiences, and social good initiatives
          </p>
          <button onClick={mintScroll} className="mh-btn"></button>
          <p className="mh-text">
            Meet the{" "}
            <span onClick={musiciansScroll} className="artist">
              {" "}
              Artists
            </span>
          </p>
        </div>
        <div className="cross"></div>
      </section>
      <section className="intro-wrapper">
        <div className="intro">
          <div className="imgs">
            <img className="img" src={mh1} alt="" />
            <img className="img" src={mh2} alt="" />
            <img className="img" src={mh3} alt="" />
            <img className="img" src={mh4} alt="" />
            <img className="img" src={mh5} alt="" />
          </div>
          <div ref={mintRef} className="content">
            <div className="mint">
              {/* <h2 className="h2">0000 / 2022</h2>
              <p className="text">Music Heads Remaining</p> */}
              <p className="text">.08 ETH</p>
              <div className="amount">
                <p className="text">Use the slider to select the amount</p>
                <p className="value">
                  {headsCount} MUSICHEADS
                  <input
                    type="text"
                    hidden="true"
                    id="number-musicheads"
                    value={headsCount}
                  />
                </p>
              </div>
              <Slider
                defaultValue={1}
                min={1}
                max={5}
                onChange={(value) => setHeadsCount(value)}
              />
              <div className="mint-btn-wrapper">
                <p className="content">{headsCount * 0.08} ETH</p>

                <button
                  className="mint-btn"
                  onClick={handleMint}
                  hidden={!isAuthenticated}
                >
                  MINT
                </button>
                <div hidden={isAuthenticated}>
                  <input
                    type="radio"
                    onChange={(e) => {
                      setIsETH(true);
                    }}
                    style={{ marginRight: "10px", marginLeft: "10px" }}
                    defaultChecked
                    name="type"
                    id="eth"
                  />
                  <label
                    htmlFor="eth"
                    style={{
                      marginRight: "10px",
                      fontSize: "20px",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    ETH
                  </label>
                  <input
                    type="radio"
                    onChange={(e) => {
                      setIsETH(false);
                    }}
                    style={{ marginRight: "10px" }}
                    name="type"
                    id="usd"
                  />
                  <label
                    htmlFor="usd"
                    style={{
                      marginRight: "20px",
                      fontSize: "20px",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    USD
                  </label>
                </div>
              </div>
              <button className="connect-btn">
                {!isAuthenticated ? (
                  isETH ? (
                    <span onClick={handleConnect}> CONNECT YOUR WALLET</span>
                  ) : (
                    <a
                      style={{ color: "#d339a9" }}
                      target="_blank"
                      href="https://paper.xyz/checkout/1ba8ab01-1f35-4cf3-aa95-15d64b7a6660"
                    >
                      NEXT
                    </a>
                  )
                ) : (
                  <span> METAMASK CONNECTED</span>
                )}
              </button>
            </div>
            <div className="text-wrapper">
              <p className="text">
                MusicHead NFT holders enjoy access to our community of leaders
                and influencers in Hip Hop, exclusive events and activations, as
                well as collective ownership of all songs contributed by our
                artists in residence.
              </p>
              <p onClick={benefitsScroll} className="artist">
                Explore the Benefits.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="roadmap">
        <div className="cross"></div>
        <h2 className="h2">ROADMAP</h2>
        <h3 className="h3">Launch</h3>
        <p className="text">
          We are minting 2022 unique music head NFTs for .08 ETH each. We will
          be whitelisting the first 222 will be reserved for a whitelist presale
          at .06 ETH until August 24th. Holders of the first 222 will gain
          access to our exclusive launch party at Buzzfeed in Los Angeles on
          August 27th, 2022. We have a special headliner that is going to have
          Buzzfeed lit!
        </p>
        <div className="vertical"></div>
        <h3 className="h3">Music Releases</h3>
        <p className="text">
          P5C will be secretly releasing songs throughout the MusicHead
          campaign.
        </p>
        <div className="vertical"></div>
        <h3 className="h3">Life Summit</h3>
        <p className="text">
          10% of all mint revenue will be invested in our charity activation
          called, “Life Summit”. This will be a 3 day gamified virtual summit
          centered around financial literacy, college prep, and entrepreneurship
          for inner city teens.
        </p>
        <div className="vertical"></div>
        <h3 className="h3">P5 Fest</h3>
        <p className="text">
          After all songs are released, we will host a music festival in Los
          Angeles California with P5C affiliated artists and mainstream
          headliners. All MusicHead holders will be invited to attend. We will
          give MusicHead holders 6 month lead time to prepare for attendance.
        </p>
        <div className="cross2"></div>
      </section>
      <section ref={benefitsRef} className="benefits">
        <h2 className="h2">BENEFITS</h2>
        <div className="content-wrapper">
          <div className="content">
            <img src={icon1} alt="" />
            <p className="heading">EXCLUSIVE ACCESS</p>
            <p className="text">NFT Holders access to:</p>
            <ul style={{ marginLeft: "20%" }}>
              <li>Industry leaders</li>
              <li>events and activations</li>
              <li>limited edition merch</li>
              <li>early song access </li>
              <li>the launch of our eventual IRL production studio</li>
            </ul>
          </div>
          <div className="content">
            <img src={icon2} alt="" />
            <p className="heading">COLLECTIVE OWNERSHIP</p>
            <p className="text">
              As songs are released, the community will decide how they will be
              launched, promoted, monetized, leveraged for social good and more.
            </p>
          </div>
          <div className="content">
            <img src={icon3} alt="" />
            <p className="heading">SOCIAL GOOD</p>
            <p className="text">
              10% of all music revenue will be invested in social good
              initiatives and programs.
            </p>
          </div>
        </div>
      </section>
      <section ref={musiciansRef} className="musicians">
        <div className="cross"></div>
        <h3 className="heading">MUSICIANS</h3>
        <p className="text">
          Each will contribute one song to be owned by the collective
        </p>
        <div className="content-wrapper">
          <div className="content">
            <img src={reverie} alt="" />
            <h2 className="h2">Reverie</h2>
            <p className="text">
              Reverie was born & raised in North East Los Angeles. Gangs.
              Graffiti. Drugs. Jail. Death was around the corner, but hip hop
              saved her life. Reverie is an enthralling storyteller whose
              supernatural lyrical flow mirrors a compelling personal history.
              “I didn’t always have a million views on YouTube and hundreds of
              thousands of fans all over the world,” says Reverie. “This didn’t
              fall in my lap. People who only got into me recently don’t know my
              backstory.”
            </p>
            <p className="text">
              Reverie is currently recording her most accomplished music yet.
              She creates in the moment as the beats inspire the words that she
              distills into songs. Reverie has built a catalog of 12 albums in
              12 years, including Sitting Upside Down, The Transition, and
              Russian Roulette, which have chronicled her life experiences. “As
              I have evolved, the music has evolved,” she says. Her audience has
              grown exponentially and globally as she regularly tours her most
              devoted following from the U.S. to Mexico, Brazil, and all over
              Europe.
            </p>
            <a
              target={"_blank"}
              href="https://open.spotify.com/artist/4K2C6TgREygMW8xo4jymq4"
              rel="noreferrer"
            >
              <img className="spotify" src={spotify} alt="spotify" />
            </a>
          </div>
          <div className="content">
            <img src={unknown} alt="unknown" />
            <h2 className="h2">Artist</h2>
            <p className="text">Artist Reveal Coming Soon!</p>
          </div>
          <div className="content">
            <img src={unknown} alt="unknown" />
            <h2 className="h2">Artist</h2>
            <p className="text">Artist Reveal Coming Soon!</p>
          </div>
        </div>
        <div className="cross2"></div>
      </section>
      <section className="team">
        <h2 className="h2">TEAM</h2>
        <div className="content-wrapper">
          <div className="content">
            <h2 className="heading">Jay Ramirez</h2>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a
                href="https://www.linkedin.com/in/thehumbleagent/"
                target={"_blank"}
              >
                <LinkedinFilled
                  style={{
                    color: "#0a66c2",
                    fontSize: "20px",
                    margin: "0 10px",
                  }}
                />
              </a>
              <a href="https://twitter.com/plyteboy" target={"_blank"}>
                <TwitterSquareFilled
                  style={{
                    color: "#0a66c2",
                    fontSize: "20px",
                    margin: "0 10px",
                  }}
                />
              </a>
            </div>
          </div>
          <div className="content">
            <h2 className="heading">Brian Giboney</h2>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a
                href="https://www.linkedin.com/in/briangiboney/"
                target={"_blank"}
              >
                <LinkedinFilled
                  style={{
                    color: "#0a66c2",
                    fontSize: "20px",
                    margin: "0 10px",
                  }}
                />
              </a>
              <a href="https://twitter.com/getdigitalsky" target={"_blank"}>
                <TwitterSquareFilled
                  style={{
                    color: "#0a66c2",
                    fontSize: "20px",
                    margin: "0 10px",
                  }}
                />
              </a>
            </div>
          </div>
          <div className="content">
            <h2 className="heading">Rachel Ramirez</h2>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a href="https://twitter.com/rayray510" target={"_blank"}>
                <LinkedinFilled
                  style={{
                    color: "#0a66c2",
                    fontSize: "20px",
                    margin: "0 10px",
                  }}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/rachel-ramirez-3a7aa958/"
                target={"_blank"}
              >
                <TwitterSquareFilled
                  style={{
                    color: "#0a66c2",
                    fontSize: "20px",
                    margin: "0 10px",
                  }}
                />
              </a>
            </div>
          </div>
          <div className="content">
            <h2 className="heading">Sivasai</h2>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a
                href="https://www.linkedin.com/in/sivasai-thota-375726110/"
                target={"_blank"}
              >
                <LinkedinFilled
                  style={{
                    color: "#0a66c2",
                    fontSize: "20px",
                    margin: "0 10px",
                  }}
                />
              </a>
              <a href="https://twitter.com/sivasaithota30" target={"_blank"}>
                <TwitterSquareFilled
                  style={{
                    color: "#0a66c2",
                    fontSize: "20px",
                    margin: "0 10px",
                  }}
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="faqs">
        <h2 className="h2">FAQs</h2>
        <Collapse
          expandIcon={({ isActive }) =>
            isActive ? <MinusOutlined /> : <PlusOutlined />
          }
          accordion
          className="collapse"
        >
          <Panel header="What is an NFT?" key="1">
            <p className="paneltext">NFT stands for 'non-fungible token</p>
            <p className="paneltext">
              An NFT is basically data that is accounted for in a digital
              ledger, and that data represents something specific and unique.
            </p>
            <p className="paneltext">
              An NFT can, for example, represent a unique piece of art or a game
              token.
            </p>
          </Panel>
          <Panel header="How Do I get an NFT?" key="2">
            <p className="paneltext">
              It will be available for purchase on our website through an
              initial sale.
            </p>
            <p className="paneltext">
              At the time of purchase, a randomly selected NFT will be minted on
              the blockchain and delivered to your wallet and OpenSea account.
            </p>
            <p className="paneltext">
              Once it is sold out, you can get a Perfect Fifth Collective NFT on
              the secondary market (on OpenSea) only.
            </p>
          </Panel>
          <Panel header="How do I purchase one?" key="3">
            <p className="paneltext">
              The easiest way is to install a MetaMask extension in your Chrome
              browser and link your Ethereum wallet to it.
            </p>
            <p className="paneltext">
              Ensure you have enough ETH in your wallet to cover the cost of a
              NFT plus the associated transaction (gas) fees.
            </p>
            <p className="paneltext">
              Approve the transaction on MetaMask and you are all set.
            </p>
            <p className="paneltext">
              Perfect Fifth Collections will be available to mint on:
              musicHeads.perfectfifthcollective.com only.
            </p>
          </Panel>
          <Panel header="What is the total supply?" key="4">
            <p className="paneltext">
              Each collection will hold 2022 unique Perfect Fifth Collective
              NFTs.
            </p>
          </Panel>
          <Panel header="How much does it cost to mint a NFT?" key="5">
            <p className="paneltext">
              The Price of Minting Music Head is 0.08 ETH.Where can I view my
              NFT?
            </p>
            <p className="paneltext">
              Once minted, you'll just need to login into your OpenSea account
              to view your NFTs. For Holders who have CoinBase wallets, CoinBase
              has now added NFT’s to be held in your account using desktop
              application.
            </p>
          </Panel>
          <Panel header="Will there be a presale?" key="6">
            <p className="paneltext">
              Yes, 222 spots. We will make sure that early & active community
              members will be rewarded by getting a spot.
            </p>
            <p className="paneltext">
              The Pre-Sale will take place from June 24th - August 24th allowing
              us time to gather all attendees credentials and submit to Buzzfeed
              for their security and attendee confirmations. The public mint
              date will be August 27th at 7pm PST.
            </p>
          </Panel>
          <Panel header="How many NFT’s can I mint?" key="7">
            <p className="paneltext">
              Whitelisted members (for pre-sale) will each be able to mint 5 NFT
              during the pre-sale, this is limited to 222 members. 222 NFT max
              will be minted during the pre-sale. During our public launch on
              August 27th, 1,800 NFTs will remain. Each transaction will be
              limited to 5 NFTs in order to give everyone a fair chance &
              prevent bots from sweeping.
            </p>
          </Panel>
          <Panel
            header="How will the traits and rarities be determined?"
            key="8"
          >
            <p className="paneltext">
              Each Perfect Fifth Collection is 100% unique and is
              programmatically generated from 100+ hand drawn traits. We will
              share our Rarity Sheet shortly after the reveal.
            </p>
          </Panel>
          <Panel
            header="How will I be able to see my Perfect Fifth Collection NFT? When is the
reveal?"
            key="9"
          >
            <p className="paneltext">
              We reveal the Perfect Fifth Collection 1, 48-hours after the
              public mint. Before that, Collection 1 will remain hidden!
            </p>
          </Panel>
        </Collapse>
      </section>
      <section className="terms">
        <h2 className="h2">Terms & Conditions</h2>
        <div className="icons">
          <a href="https://opensea.io/collection/musichead-nft">
            <img src={footer1} alt="" />
          </a>
          <a href="https://discord.com/invite/62xKhR2HTy">
            <img src={footer2} alt="" />
          </a>
          <a href="https://twitter.com/PerfectFifthCol">
            <img src={footer3} alt="" />
          </a>
          <a href="https://www.instagram.com/perfectfifthcollective/">
            <img src={footer4} alt="" />
          </a>
        </div>
        <a
          href="https://etherscan.io/address/0x97e8ea727650a8a14fbf2a4d5961205c71a7b514"
          className="text"
        >
          Contract
        </a>
      </section>
    </div>
  );
}

export default App;
