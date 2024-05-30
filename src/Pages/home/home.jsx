import "./home.css";

import iconChat from "./../../assets/img/icon-chat.png";
import iconMoney from "./../../assets/img/icon-money.png";
import iconSecurity from "./../../assets/img/icon-security.png";

function Home() {
  return (
    <main>
      <section className="banner">
        <div className="banner-container">
          <div className="banner-text-container">
            <h2 className="banner-text-title"> No fees.</h2>
            <h2 className="banner-text-title">No minimum deposit.</h2>
            <h2 className="banner-text-title">High interest rates.</h2>
            <p className="banner-text-subtitle">
              Open a savings account with Argent Bank today!
            </p>
          </div>
        </div>
      </section>

      <section className="feature">
        <div className="feature-container">
          <img className="feature-icon" src={iconChat} alt="icon chat" />
          <h2 className="feature-title">You are our #1 priority</h2>
          <p className="feature-text">
            Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes.
          </p>
        </div>

        <div className="feature-container">
          <img className="feature-icon" src={iconMoney} alt="icon money" />
          <h2 className="feature-title">More savings means higher rates</h2>
          <p className="feature-text">
            The more you save with us, the higher your interest rate will be!
          </p>
        </div>

        <div className="feature-container">
          <img
            className="feature-icon"
            src={iconSecurity}
            alt="icon security"
          />
          <h2 className="feature-title">Security you can trust</h2>
          <p className="feature-text">
            We use top of the line encryption to make sure your data and money
            is always safe.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Home;
