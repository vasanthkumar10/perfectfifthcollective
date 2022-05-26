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
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { connect } from "./mint";

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

  const handleConnect = () => {
    connect()
      .then((result) => {
        setIsAuthenticated(result);
      })
      .catch((err) => {
        setIsAuthenticated(err);
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
              <h2 className="h2">0000 / 2022</h2>
              <p className="text">Music Heads Remaining</p>
              <p className="text">.12 ETH</p>
              <div className="amount">
                <p className="text">Choose the amount you'd like</p>
                <p className="value">{headsCount} MUSICHEADS</p>
              </div>
              <Slider
                defaultValue={1}
                min={1}
                max={5}
                onChange={(value) => setHeadsCount(value)}
              />
              <div className="mint-btn-wrapper">
                <p className="content">{headsCount * 0.12} ETH</p>
                <button className="mint-btn" disabled={true}>
                  MINT
                </button>
              </div>
              <button onClick={handleConnect} className="connect-btn">
                {!isAuthenticated ? (
                  <span> CONNECT YOUR WALLET</span>
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
          We are minting 2022 unique music head NFTs for .12 ETH each. The First
          222 will be reserved for 24 hour whitelist presale at .05 ETH. Holders
          of the first 222 will gain access to our exclusive DTLA launch party.
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
          headliners. Only MusicHead holders will be invited to attend. We will
          give MusicHead holders 6 month lead time to prepare for attendance.
        </p>
        <div className="cross2"></div>
      </section>
      <section ref={benefitsRef} className="benefits">
        <h2 className="h2">BENEFITS</h2>
        <div className="content-wrapper">
          <div className="content">
            <img src={icon1} alt="" />
            <p className="heading">Exclusive Access</p>
            <p className="text">NFT Holders access to:</p>
            <ul>
              <li>Industry leaders</li>
              <li>events and activations</li>
              <li>limited edition merch</li>
              <li>early song access </li>
              <li>the launch of our eventual IRL production studio</li>
            </ul>
          </div>
          <div className="content">
            <img src={icon2} alt="" />
            <p className="heading">Collective Ownership</p>
            <p className="text">
              As songs are released, the community will decide how they will be
              launched, promoted, monetized, leveraged for social good and more.
            </p>
          </div>
          <div className="content">
            <img src={icon3} alt="" />
            <p className="heading">Social Good</p>
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
            <p className="text">
              Jay Ramirez is a music & tech executive, Loyola Marymount business
              coach, and 1500 or Nothing Academy producer. In 2007, Justin
              founded music publication, Revibe, which spread through 28
              countries and garnered millions of views. Through this medium he
              was able to build brand partnerships and various multi-media
              campaign collaborations with Grammy nominated artists and brands
              such as BuzzFeed, iHeartRadio, PayDayLA, Elevator Mag, Brain
              Bakery, etc. Justin is the Founder of a blockchain-based music
              label, Perfect Fifth Collective, aiming to help democratize the
              music industry.
            </p>
          </div>
          <div className="content">
            <h2 className="heading">Brian Giboney</h2>
            <p className="text">
              Brian is a 20 year design and marketing veteran with clients
              ranging from fortune 500 like Toshiba and Black and Decker to
              local small businesses. In 2011 Brian launched an education
              technology / software start-up and landed a major state university
              and healthcare company as clients. In 2015 he co-founded plyte
              artist development serving as CTO alongside Justin. Since then
              Brian has overseen multiple enterprise software builds. In
              addition to P5, Brian has consulted on multiple other NFT
              collections with over 8,000 tokens minted.
            </p>
          </div>
          <div className="content">
            <h2 className="heading">Rachel Ramirez</h2>
            <p className="text">
              Rachel Ramirez is an entrepreneur, philanthropist, and artist who
              has built programs and companies focused around health, tech, and
              the performing arts. She spent 6 years as Director of Emerging
              Artists and Executives for Young Angels of America creating art
              and leadership programs for teens. She is a member of Rotary
              International, and sits on the Westchester, CA E-board as Peace
              Chair. She is the Founder of Fit Mindful Body Club, creating a
              virtual wellness club for companies to improve their work culture
              and address employee health.
            </p>
          </div>
          <div className="content">
            <h2 className="heading">Sasha D. Pisterman</h2>
            <p className="text">
              is Founder of PR agency, SDP Digital, and is a Multicultural
              Publicity & Branding Strategist. She is skilled in crafting and
              executing communications strategies rooted in culture that
              authentically connect brands to their target audiences and
              increase brand awareness. With ten years of experience working in
              the entertainment, corporate, lifestyle, law, education, and
              health sectors, she utilizes a grassroots approach when working
              with brands to tell their story. Her clients have included BMI,
              Interscope, Atlantic, Live Nation, Capitol Records, ASCAP, I Heart
              Radio, J Lo, Snow The Product, DJ Mustard and more.
            </p>
          </div>
          <div className="content">
            <h2 className="heading">Yushi X</h2>
            <p className="text">
              is an Australian based professional illustrator, graphic designer,
              and NFT artist. She received her Arts degree from the University
              of New South Wales. She focuses on 2D illustrations, 2D animation,
              and 3D character designs for NFT projects. She has worked on
              several NFT projects including the sold out collection, Wanna
              Panda.
            </p>
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
          <Panel header="How do I purchase?" key="1">
            <p className="paneltext">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
              eligendi deleniti officia ea, neque fugiat itaque incidunt
              adipisci, iure nam aliquid illum illo dolore maiores. Harum sequi
              quasi ducimus quae totam cupiditate dolorem amet nobis sed
              voluptas aspernatur eaque dolore, doloribus voluptatem eveniet
              voluptatum qui eum quia accusamus vero. Ea est pariatur omnis
              perferendis molestias mollitia culpa neque fugit earum.
            </p>
          </Panel>
          <Panel header="What is Gas?" key="2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              reiciendis porro temporibus totam sint ipsum vero animi rerum fuga
              dolores sed nihil quisquam modi nam sequi, distinctio consectetur.
              In, sint.
            </p>
          </Panel>
          <Panel header="Where do I buy ethereum?" key="3">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium numquam consequuntur natus deserunt, exercitationem
              rerum nemo sit ab! Excepturi, molestias.
            </p>
          </Panel>
        </Collapse>
      </section>
      <section className="terms">
        <h2 className="h2">Terms & Conditions</h2>
        <div className="icons">
          <a href="https://opensea.io/">
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
        <p className="text">Contract Coming Soon!</p>
      </section>
    </div>
  );
}

export default App;
