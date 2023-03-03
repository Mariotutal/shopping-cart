import ReactJson from "react-json-view";
import useContactFormStore from "../../hooks/useContactFormStore";
import useProductStore from "../../hooks/useProductStore";
import styles from "./stateHandle.module.scss";

const StateHandle = () => {
  const { formData } = useContactFormStore();
  const { cartItems } = useProductStore();

  const data = { form: { ...formData }, cart: { ...cartItems } };

  return (
    <div className={styles.content}>
      {data ? <ReactJson src={data} /> : null}
    </div>
  );
};
export default StateHandle;
