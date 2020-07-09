import React from "react";
import { Formik, FieldArray, getIn } from "formik";
import * as yup from "yup";

function App() {
  const validationSchema = yup.object({
    firstName: yup.string().required().max(100).min(5),
    pets: yup.array().of(
      yup.object({
        name: yup.string().required(),
      })
    ),
  });

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
          pets: [
            {
              name: "jarvis",
              type: "dog",
            },
            {
              name: "soma",
              type: "cat",
            },
          ],
        }}
        validationSchema={validationSchema}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          /* for async */
          setSubmitting(true);

          console.log(data);

          setSubmitting(false);
          resetForm();
        }}
      >
        {({
          values,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          errors,
          touched,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className={`form-control ${
                  touched.firstName && errors.firstName ? "is-invalid" : null
                } `}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
                name="firstName"
              />
              <small className="text-danger">
                {touched.firstName && errors.firstName}
              </small>
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
              <FieldArray name="pets">
                {(arrayHelpers) => (
                  <div>
                    <button
                      type="button"
                      className="btn btn-info btn-block"
                      onClick={() =>
                        arrayHelpers.push({
                          name: "",
                          type: "",
                        })
                      }
                    >
                      Add Pet
                    </button>
                    {values.pets.map((pet, index) => {
                      const inputPetName = `pets.${index}.name`;
                      const selectTypeName = `pets.${index}.type`;
                      const error = getIn(errors, inputPetName);

                      return (
                        <div key={index}>
                          <input
                            type="text"
                            className="form-control mt-2"
                            placeholder="Pet name"
                            name={inputPetName}
                            value={pet.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <select
                            name={selectTypeName}
                            className="form-control mt-2"
                            value={pet.type}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          >
                            <option value="">Select Pet</option>
                            <option value="cat">cat</option>
                            <option value="dog">dog</option>
                            <option value="frog">frog</option>
                          </select>
                          <button
                            className="btn btn-danger btn-block mt-2"
                            onClick={() => arrayHelpers.remove(index)}
                          >
                            Remove
                          </button>
                          <small className="text-danger">{error}</small>
                        </div>
                      );
                    })}
                  </div>
                )}
              </FieldArray>
            </div>

            <div className="form-group">
              <button
                type="submit"
                className="btn btn-primary btn-block"
                disabled={isSubmitting}
              >
                Submit Form
              </button>
            </div>

            <pre>{JSON.stringify(values, null, 2)}</pre>
            <pre>{JSON.stringify(errors, null, 2)}</pre>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default App;
