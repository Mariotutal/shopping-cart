import styles from "./button.module.scss";

const Button = ({ className, children, onClick, variant }) => {
  const buttonClasses = `${styles.button} ${styles[variant]} ${className}`;

  return (
    <button className={buttonClasses} onClick={onClick} type="button">
      {children}
    </button>
  );
};

export default Button;
