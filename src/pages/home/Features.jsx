import React from "react";
import "../../styles/features.css";
import trade from "../../assets/images/trade.png";
import fast from "../../assets/images/fast.png";
import privatee from "../../assets/images/privatee.png";
// import Coin from "../../components/Coin";

const Features = () => {
  return (
    <>
      <div className="container">
        <div className="what-a" data-aos="zoom-in">
          <div className="what-we">
            WHAT WE <span className="offer">OFFER</span>
          </div>
        </div>
        <div className="what-sec">
          <div
            className="what-body"
            data-aos="slide-up"
            data-aos-duration="1000"
          >
            <div className="">
              <img src={trade} className="what-img1" alt="trade" />
              <p className="what-oro">
                We trade Bitcoin, Ethereum, and a wide range of Alt Coins,
                spreading our bets across the crypto universe. With a finger on
                the pulse of emerging technologies and trends, we're poised to
                ride the waves of innovation in the crypto world. Join us on our
                journey to explore the limitless potential of digital assets.
              </p>
            </div>
          </div>
          <div
            className="what-body"
            data-aos="slide-up"
            data-aos-duration="1500"
          >
            <div className="">
              <img src={fast} className="what-img1" alt="fast" />
              <p className="what-oro">
                With a finger on the pulse of the market, We buy and sell
                cryptocurrencies at the speed of light. Quick thinking and rapid
                responses are our signature moves, making every trade a decisive
                move towards financial success.
              </p>
            </div>
          </div>
          <div
            className="what-body"
            data-aos="slide-up"
            data-aos-duration="3000"
          >
            <div className="">
              <img src={privatee} className="what-img1" alt="secured" />
              <p className="what-oro">
                Trustworthy and secure crypto transactions are our forte. We buy
                cryptocurrencies from individuals, ensuring a safe and
                transparent process every time. Your funds are in reliable
                hands, and We take pride in establishing trust without a doubt.
                Let's make your crypto exchange experience seamless and secure.
              </p>
            </div>
          </div>
        </div>
        {/* <Coin /> */}
      </div>
    </>
  );
};

export default Features;
