import "./home.css";
import FeaturesItemsData from "./../../Data/FeaturesItemsData.json";
import iconChat from "./../../assets/img/icon-chat.png";
import iconMoney from "./../../assets/img/icon-money.png";
import iconSecurity from "./../../assets/img/icon-security.png";
import Item from "../../components/item/item";

function Home() {
  const ImageData = {
    "icon-chat.png": iconChat,
    "icon-money.png": iconMoney,
    "icon-security.png": iconSecurity,
  };
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
        {FeaturesItemsData.map((data) => (
          <Item
            key={data.id}
            image={ImageData[data.image]}
            descriptionImage={data.descriptionImage}
            title={data.title}
            description={data.description}
          />
        ))}
      </section>
    </main>
  );
}

export default Home;
