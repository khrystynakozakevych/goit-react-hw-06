import { nanoid } from "nanoid";
import { ErrorMessage, Formik, Field, Form } from "formik";
import css from "./ContactForm.module.css";
import * as Yup from "yup";

const ContactForm = ({ onAdd }) => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
    onAdd({
      ...values,
      id: nanoid(),
    });
  };

  const onlyLetters = /^[A-Za-zА-Яа-яЄєІіЇїҐґ-\s]+$/;
  const regExp = /^\d{3}-\d{2}-\d{2}$/;

  const applySchema = Yup.object().shape({
    name: Yup.string()
      .required("Please enter the name")
      .min(3, "Min 3 characters!")
      .max(50, "Max 50 characters!")
      .matches(onlyLetters, "Only letters!"),
    number: Yup.string()
      .required("Please enter the phon number")
      .matches(regExp, "Invalid format"),
  });
  return (
    <div className={css.form_container}>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{ name: "", number: "" }}
        validationSchema={applySchema}
      >
        <Form>
          <div className={css.wrapper}>
            <Field
              className={css.input}
              name="name"
              placeholder="Name Surname"
            />
            <ErrorMessage className={css.error} component="span" name="name" />
          </div>
          <div className={css.wrapper}>
            <Field
              className={css.input}
              name="number"
              placeholder="XXX-XX-XX"
            />
            <ErrorMessage
              className={css.error}
              component="span"
              name="number"
            />
          </div>
          <button className={css.form_btn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
