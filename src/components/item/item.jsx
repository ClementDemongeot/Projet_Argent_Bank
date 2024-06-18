import "./Item.css";

function Item({ image, descriptionImage, title, description }) {
  return (
    <div className="feature-container">
      <img src={image} alt={descriptionImage} className="feature-icon" />
      <h2 className="feature-title">{title}</h2>
      <p className="feature-text">{description}</p>
    </div>
  );
}

export default Item;
