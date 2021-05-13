import React from "react";
import Styles from "../assets/jss/Styles";
import { Form, Field } from "react-final-form";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values) => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

// const handleSubmit = (e) => {
//   debugger;
// };

const TestValidation = (props) => {
  return (
    <Styles>
      <h2>Tagline Traders Login </h2>
      <Form
        onSubmit={onSubmit}
        validate={(values) => {
          const errors = {};
          if (!values.username) {
            errors.username = "Required";
          }
          if (!values.password) {
            errors.password = "Required";
          }
          // if (!values.confirm) {
          //   errors.confirm = "Required";
          // } else if (values.confirm !== values.password) {
          //   errors.confirm = "Both passwords Must match";
          // }
          return errors;
        }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <Field name="username">
              {({ input, meta }) => (
                <div>
                  {/* <label>Username</label> */}
                  <input {...input} type="text" placeholder="User Name" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="password">
              {({ input, meta }) => (
                <div>
                  {/* <label>Password</label> */}
                  <input {...input} type="password" placeholder="Password" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            {/* <Field name="confirm">
              {({ input, meta }) => (
                <div>
                  <label>Confirm</label>
                  <input {...input} type="password" placeholder="Confirm" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field> */}
            <div className="buttons">
              <button type="submit" disabled={submitting}>
                Submit
              </button>
              <button
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}
              >
                Reset
              </button>
            </div>
            {/* {<pre>{JSON.stringify(values, 0, 2)}</pre>} */}
          </form>
        )}
      />
    </Styles>
  );
};

export default TestValidation;
