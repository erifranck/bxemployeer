import React from 'react';
import {withFormik, Form, Field, Formik} from 'formik';
import * as Yup from 'yup';
// import countriesData from './countries/countries'
import './newEmployeeWithFormik.css';
import {docTypeRegEx, emailRegEx, genderRegEx, nameRegEx, phoneRegEx} from "../../utils/validations";
import {connect} from "react-redux";
import {createPersonRequest} from "../../redux/actions/peopleActions";

const MyForm = props => {
  const {
    initialValues = {},
    createPerson,
  } = props;

  return (
      <Formik
          initialValues={initialValues}
          validationSchema= {
              Yup.object().shape({
                firstName: Yup.string().min(3).max(20).matches(nameRegEx,"This first name doesn't seem ok").required(),
                lastName: Yup.string().min(3).max(20).matches(nameRegEx,"This last name doesn't seem ok").required(),
                dateOfBirth:Yup.date().required(),
                docType: Yup.string().matches(docTypeRegEx,"The selected document type is not valid").required(),
                docNumber: Yup.number().positive().required(),
                gender: Yup.string().matches(genderRegEx,"The selected gender is not valid").required(),
                nationality: Yup.string().required(),
                phone: Yup.string().matches(phoneRegEx,"Phone number doesn't look ok"),
                email: Yup.string().matches(emailRegEx,"Email is not a valid adress"),

              })
          }
          onSubmit={ (values) => {
              const objToSend = {
                  firstNames: values.firstName,
                  lastNames: values.lastName,
                  dateOfBirth: values.dateOfBirth,
                  documentType: values.docType,
                  documentID: values.docNumber,
                  gender: values.gender,
                  nationality: values.nationality,
                  contact: values.email,
                  relationships: []
              };
              createPerson(objToSend);
          }}
          render={
              ({touched, errors}) => (
                  <Form>
                      <div className="bx-emp-form-row">
                          <label>Name
                              <div className="bx-emp-form-field">
                                  <Field
                                      type="firstName"
                                      name="firstName"
                                      placeholder="first name"
                                  />
                              </div>
                              <div className="bx-emp-form-field">
                                  <Field
                                      type="lastName"
                                      name="lastName"
                                      placeholder="last name"
                                  />
                              </div>
                          </label>
                      </div>
                      { touched.firstName && errors.firstName && <li>{errors.firstName}</li> }
                      { touched.lastName && errors.lastName && <li>{errors.lastName}</li> }
                      <div className="bx-emp-form-row">
                          <label>Date of birth
                              <div className="bx-emp-form-field">
                                  <Field
                                      type="date"
                                      name="dateOfBirth"
                                  />
                              </div>
                          </label>
                      </div>
                      { touched.dateOfBirth && errors.dateOfBirth && <li>{errors.dateOfBirth}</li> }
                      <div className="bx-emp-form-row">
                          <label>Document number
                              <div className="bx-emp-form-field">
                                  <Field component="select" name="docType">
                                      <option value="">Select</option>
                                      <option value="DNI">DNI</option>
                                      <option value="LC">LC</option>
                                  </Field>
                                  <Field
                                      type="number"
                                      name="docNumber"
                                  />
                              </div>
                          </label>
                      </div>
                      { touched.docType && errors.docType && <li>{errors.docType}</li> }
                      { touched.docNumber && errors.docNumber && <li>{errors.docNumber}</li> }
                      <div className="bx-emp-form-row">
                          <label>Gender
                              <div className="bx-emp-form-field">
                                  <Field component="select" name="gender">
                                      <option value="">Select</option>
                                      <option value="M">Male</option>
                                      <option value="F">Female</option>
                                      <option value="O">Other</option>
                                  </Field>
                              </div>
                          </label>
                          <label>Nationality
                              <div className="bx-emp-form-field">
                                  <Field component="select" name="nationality">
                                      <option value="">Select</option>
                                      <option value="Argentina">Argentina</option>
                                      <option value="Brazil">Brazil</option>
                                      <option value="Chile">Chile</option>
                                      <option value="Uruguay">Uruguay</option>
                                  </Field>
                              </div>
                          </label>
                      </div>
                      { touched.gender && errors.gender && <p>{errors.gender}</p> }
                      { touched.nationality && errors.nationality && <p>{errors.nationality}</p> }

                      <div className="bx-emp-form-row">
                          <label>Contact
                              <div className="bx-emp-form-field">
                                  <Field
                                      type="tel"
                                      name="phone"
                                  />
                              </div>
                              <div className="bx-emp-form-field">
                                  <Field
                                      type="email"
                                      name="email"
                                  />
                              </div>
                          </label>
                      </div>
                      { touched.phone && errors.phone && <p>{errors.phone}</p> }
                      { touched.email && errors.email && <p>{errors.email}</p> }

                      <button type="submit" >Save</button>
                  </Form>
              )
          }
      >
      </Formik>
  );
};

const mapDispatchToProps = (dispatch) => ({
  createPerson: (payload) => dispatch(createPersonRequest(payload)),
});

const MyEnhancedForm = connect()(MyForm);

export class NewEmployeeWithFormik extends React.Component {

  render() {
    return (

        <div className="bx-emp-form-container">
            <MyEnhancedForm />
        </div>

    );
}
}

