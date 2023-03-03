import styles from "./button.module.scss";

const Button = ({ className, children, onClick, variant, type = "button" }) => {
  const buttonClasses = `${styles.button} ${styles[variant]} ${className}`;

  return (
    <button className={buttonClasses} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
