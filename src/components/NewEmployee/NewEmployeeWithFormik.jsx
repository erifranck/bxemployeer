import React from 'react';
import { Form, Field, Formik} from 'formik';
import * as Yup from 'yup';
// import countriesData from './countries/countries'
import {docTypeRegEx, emailRegEx, genderRegEx, nameRegEx, phoneRegEx} from "../../utils/validations";
import {connect} from "react-redux";
import {createPersonRequest, editPersonRequest} from "../../redux/actions/peopleActions";
import {Button} from '../Button/Button'
import Select from 'react-select'
import countryList from 'react-select-country-list'

import './newEmployeeWithFormik.css';
import {getDate} from "../../utils/dateManagement";
import {editPerson} from "../../services/peopleService";


class CountrySelector extends React.Component {
  constructor(props) {
    super(props);

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
    });
    
    this.state = {
      options: this.options,
    }

  }

  changeHandler = value => {
    this.props.onSelectCountry(value.label);
  };

  render() {
    return (
      <Select
        options={this.state.options}
        value={this.state.options.filter((item) => {
            return item.label === this.props.value;
            })[0]
        }
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
    createPerson, editPerson
  } = props;



  return (
      <Formik
          initialValues={props.initialValues}
          validationSchema= {
              Yup.object().shape({
                firstName: Yup.string().min(3).max(20).matches(nameRegEx,"This first name doesn't seem ok").required(),
                lastName: Yup.string().min(3).max(20).matches(nameRegEx,"This last name doesn't seem ok").required(),
                dateOfBirth:Yup.date().min('1900-01-01','Fecha no valida').max('2002-01-01',"Fecha no valida").required(),
                docType: Yup.string().matches(docTypeRegEx,"The selected document type is not valid").required(),
                docNumber: Yup.number().positive().required(),
                gender: Yup.string().matches(genderRegEx,"The selected gender is not valid").required(),
                nationality: Yup.string().required(),
                phone: Yup.string().matches(phoneRegEx,"Phone number doesn't look ok"),
                email: Yup.string().matches(emailRegEx,"Email is not a valid adress"),
                // email: Yup.string().matches(emailRegEx,"Email is not a valid adress").test( (value) => {
                //   console.log(value)
                //   const {phone} = this.parent;
                //   if (!phone) return value != null
                //   return true
                // }),
              })
          }

/*           validate = { ({values, touched}) => {

            console.log(touched.firstName,values.firstName)
            let errors = {};
            if (touched.firstName){
              console.log("validating")

              if (!values.firstName) {
                errors.firstName = 'name Required';
              } else if (nameRegEx.test(values.email)) {
                errors.firstName = 'Invalid name ';
              }

            }
            return errors;
          }
        } */


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
              props.initialValues.id ?
                  editPerson(objToSend)
              :
                  createPerson(objToSend)

          }}


          render={
              ({touched, errors, setFieldValue}) => (
                  <Form>
                    <div className="bx-form-inputs">

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

                        <label>Date of birth</label>
                        <div className="bx-emp-form-row">
                                <div className="bx-emp-form-field">
                                    <Field render={({field}) => <input type="date" value={getDate(new Date(field.value))}/>}
                                        type="date"
                                        name="dateOfBirth"
                                    />
                                </div>
                        </div>
                        { touched.dateOfBirth && errors.dateOfBirth && <li>{errors.dateOfBirth}</li> }

                        <label>Document number</label>
                        <div className="bx-emp-form-row">
                              <div className="bx-emp-form-row">
                                <div className="bx-emp-form-field">
                                    <Field component="select" name="docType">
                                      <option value="">Select</option>
                                      <option value="DNI">DNI</option>
                                      <option value="LC">LC</option>
                                    </Field>
                                </div>
                                <div className="bx-emp-form-field">
                                  <Field
                                    type="number"
                                    name="docNumber"
                                  />
                                </div>  
                              </div>     
                        </div>
                        { touched.docType && errors.docType && <li>{errors.docType}</li> }
                        { touched.docNumber && errors.docNumber && <li>{errors.docNumber}</li> }

                        <label>Gender</label>
                        <div className="bx-emp-form-row">
                                <div className="bx-emp-form-field">
                                    <Field component="select" name="gender">
                                        <option value="">Select</option>
                                        <option value="M">Male</option>
                                        <option value="F">Female</option>
                                        <option value="O">Other</option>
                                    </Field>
                                </div>
                          </div>
                          { touched.gender && errors.gender && <li>{errors.gender}</li> }

                          <label>Nationality</label>
                          <div className="bx-emp-form-row">
                              <div className="bx-emp-nationality-field">
                                  <Field render={(field) => {
                                      return (
                                      <CountrySelector value={field.field.value}
                                      onSelectCountry = {(value) => setFieldValue('nationality',value)}
                                    />
                                  )
                                  }
                                  }
                                    name="nationality"
                                  />

                                  
                                  
                              </div>

                          </div>
                        { touched.nationality && errors.nationality && <li>{errors.nationality}</li> }

                        <label>Contact</label>
                        <div className="bx-emp-form-row">
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
                        { touched.phone && errors.phone && <li>{errors.phone}</li> }
                        { touched.email && errors.email && <li>{errors.email}</li> }
                      
                      </div>
                      {
                        props.initialValues.id ?
                            <Button editButton={true} type="submit">Confirm changes</Button>
                            :
                            <Button saveButton={true} type="submit">Save</Button>
                      }
                  </Form>
                  
              )
          }
      >
      </Formik>
  );
};



const mapDispatchToProps = (dispatch) => ({
    createPerson: (payload) => dispatch(createPersonRequest(payload)),
    editPerson: (payload) => dispatch((editPersonRequest(payload))),
});

const MyEnhancedForm = connect(null,mapDispatchToProps)(MyForm);

export class NewEmployeeWithFormik extends React.Component {

  render() {
    return (

        <div className="bx-emp-form-container">
            <MyEnhancedForm initialValues={this.props.initialValues}/>
        </div>

    );
}
}

