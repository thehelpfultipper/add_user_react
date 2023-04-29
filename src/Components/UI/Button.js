import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      type={props.type}
      className={`${styles.btn} ${props?.className}`}
      onClick={props.onClick && props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
