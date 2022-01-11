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
          src="/img/cover.png"
          alt="back"
        />
      </div>
    </div>
  );
};

export default SingleCard;
