import React from "react";
import { Formik } from "formik";

function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center">React Learn Formik</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          isTall: "",
        }}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          /* for async */
          setSubmitting(true);

          console.log(data);

          setSubmitting(false);
          resetForm();
        }}
      >
        {({ values, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
                name="firstName"
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
                name="lastName"
              />
            </div>
            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.isTall}
                  name="isTall"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  is Tall
                </label>
              </div>
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                Submit Form
              </button>
            </div>

            <pre>{JSON.stringify(values, null, 2)}</pre>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default App;
