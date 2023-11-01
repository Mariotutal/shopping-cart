import { useForm } from "react-hook-form";
import Button from "../components/Button/Button";
import useContactFormStore from "../../hooks/useContactFormStore";
import styles from "./form.module.scss";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { setFormData } = useContactFormStore();

  const onSubmit = (data) => {
    setFormData(data);
  };

  const validateEmail = (email) => {
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regexEmail.test(email);
  };

  const validatePhone = (phone) => {
    const regexPhone = /^\+\d{3}\s\d{8}/;
    return regexPhone.test(phone);
  };

  return (
    <div className={styles.container}>
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.inputContainer}>
          <label htmlFor="name" className={styles.label}>
            Nombre
          </label>
          <input
            type="text"
            name="name"
            id="name"
            {...register("name", { required: true })}
            className={
              errors.name
                ? `${styles.input} ${styles.inputError}`
                : styles.input
            }
          />
          {errors?.name ? (
            <span className={styles.error}>Este campo es requerido</span>
          ) : null}
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            {...register("email", {
              required: true,
              validate: validateEmail,
            })}
            className={
              errors.email
                ? `${styles.input} ${styles.inputError}`
                : styles.input
            }
          />
          {errors?.email ? (
            <span className={styles.error}>
              {errors.email.type === "required"
                ? "Este campo es requerido"
                : "Ingrese un correo electrónico válido"}
            </span>
          ) : null}
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="phone" className={styles.label}>
            Teléfono
          </label>
          <input
            type="text"
            name="phone"
            placeholder="+123 12345678"
            id="phone"
            {...register("phone", {
              required: true,
              validate: validatePhone,
            })}
            className={
              errors.phone
                ? `${styles.input} ${styles.inputError}`
                : styles.input
            }
          />
          {errors?.phone && errors.phone.type === "required" && (
            <span className={styles.error}>Este campo es requerido</span>
          )}
          {errors?.phone && errors.phone.type === "validate" && (
            <span className={styles.error}>
              Ingresa un número de teléfono válido (+xxx xxxxxxxx)
            </span>
          )}
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="message" className={styles.label}>
            Mensaje
          </label>
          <textarea
            name="message"
            id="message"
            {...register("message", {
              required: true,
            })}
            className={
              errors.message
                ? `${styles.input} ${styles.inputError}`
                : styles.input
            }
          />
          {errors?.message && (
            <span className={styles.error}>Este campo es requerido</span>
          )}
        </div>

        <Button variant="primary" className={styles.send} type="submit">
          Enviar
        </Button>
      </form>
    </div>
  );
};

export default Form;
