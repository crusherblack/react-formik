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
          cookies: [],
          yogurt: "",
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
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value="cookies 1"
                  name="cookies"
                  id="cookies1"
                />
                <label className="custom-control-label" htmlFor="cookies1">
                  Cookies 1
                </label>
              </div>
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value="cookies 2"
                  name="cookies"
                  id="cookies2"
                />
                <label className="custom-control-label" htmlFor="cookies2">
                  Cookies 2
                </label>
              </div>
            </div>
            <div className="form-group">
              <div class="radio">
                <label>
                  <input
                    type="radio"
                    name="yogurt"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value="Yogurt 1"
                    style={{ marginRight: "0.7rem" }}
                  />
                  Yogurt 1
                </label>
              </div>
              <div class="radio">
                <label>
                  <input
                    type="radio"
                    name="yogurt"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value="Yogurt 2"
                    style={{ marginRight: "0.7rem" }}
                  />
                  Yogurt 2
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
