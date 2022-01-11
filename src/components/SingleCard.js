import "./SingleCard.css";
const SingleCard = ({ card, handleChoice, flipped, disabled }) => {
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="front" />
        <img
          onClick={() => {
            if (!disabled) handleChoice(card);
          }}
          className="back"
          src="/img/297c85583cdfd6e87da5c7885584d88c.jpg"
          alt="back"
        />
      </div>
    </div>
  );
};

export default SingleCard;
