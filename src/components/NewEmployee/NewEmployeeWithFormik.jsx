import React from 'react';
import { Form, Field, Formik} from 'formik';
import * as Yup from 'yup';
// import countriesData from './countries/countries'
import './newEmployeeWithFormik.css';
import {docTypeRegEx, emailRegEx, genderRegEx, nameRegEx, phoneRegEx} from "../../utils/validations";
import {connect} from "react-redux";
import {createPersonRequest} from "../../redux/actions/peopleActions";


import Select from 'react-select'
import countryList from 'react-select-country-list'



class CountrySelector extends React.Component {
  constructor(props) {
    super(props)

    this.options = countryList().getData().filter( ({label}) => {
        return (
        label === "Argentina" ||
        label === "Chile" ||
        label === "Colombia" ||
        label === "Brazil" ||
        label === "Paraguay" ||
        label === "Peru" ||
        label === "United States" ||
        label === "Uruguay"
        )
    })
    
    this.state = {
      options: this.options,
      value: null,
    }

  }

  changeHandler = value => {
    this.setState({ value })
    this.props.onSelectCountry(value.label)
  }

  render() {
    return (
      <Select
        options={this.state.options}
        value={this.state.value}
        onChange={this.changeHandler}
      />
    )
  }
}





const MyForm = props => {
  const {
    initialValues = {
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      docType: '',
      docNumber: '',
      gender: '',
      nationality: '',
      phone: '',
      email: '',

  },
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

            console.log(values);

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
              debugger;
              createPerson(objToSend);
          }}


          render={
              ({touched, errors, setFieldValue}) => (
                  <Form>
                    
                    <label>Name</label>

                      <div className="bx-emp-form-row">
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
                      </div>
                      { touched.firstName && errors.firstName && <li>{errors.firstName}</li> }
                      { touched.lastName && errors.lastName && <li>{errors.lastName}</li> }
                      <div className="bx-emp-form-row">
                          <label>Date of birth</label>
                              <div className="bx-emp-form-field">
                                  <Field
                                      type="date"
                                      name="dateOfBirth"
                                  />
                              </div>
                      </div>
                      { touched.dateOfBirth && errors.dateOfBirth && <li>{errors.dateOfBirth}</li> }
                      <div className="bx-emp-form-row">
                          <label>Document number</label>
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
                      </div>
                      { touched.docType && errors.docType && <li>{errors.docType}</li> }
                      { touched.docNumber && errors.docNumber && <li>{errors.docNumber}</li> }
                      <div className="bx-emp-form-row">
                          <label>Gender</label>

                              <div className="bx-emp-form-field">
                                  <Field component="select" name="gender">
                                      <option value="">Select</option>
                                      <option value="M">Male</option>
                                      <option value="F">Female</option>
                                      <option value="O">Other</option>
                                  </Field>
                              </div>
                        </div>
                        { touched.gender && errors.gender && <p>{errors.gender}</p> }

                        <div className="bx-emp-form-row">

                          <label>Nationality</label>

                            <div className="bx-emp-nationality-field">
                                
                                <CountrySelector 
                                    onSelectCountry = {(value) => setFieldValue('nationality',value)} 
                                />
                                
                                
                            </div>

                        </div>
                      { touched.nationality && errors.nationality && <p>{errors.nationality}</p> }

                      <div className="bx-emp-form-row">
                          <label>Contact</label>
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

