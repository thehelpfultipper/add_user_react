import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div
      className={`${styles.card_wrapper} ${props.className && props.className}`}
    >
      {props.children}
    </div>
  );
};

export default Card;
