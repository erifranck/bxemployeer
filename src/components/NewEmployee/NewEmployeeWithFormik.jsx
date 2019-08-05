import React from 'react';
import { withFormik , Form , Field } from 'formik';
import * as Yup from 'yup';

const MyForm = props => {
  const {
    values,
    errors,
    touched,

  } = props;
  return (
    <Form>
      <div>
        { touched.firstName && errors.firstName && <p>{errors.firstName}</p> }
        <Field
          type="firstName"
          name="firstName"
        />
      </div>
      <div>
        { errors.lastName && <p>{errors.lastName}</p> }
        <Field
          type="lastName"
          name="lastName"
        />
      </div>
      <div>
        { errors.dateOfBirth && <p>{errors.dateOfBirth}</p> }
        <Field
          type="date"
          name="dateOfBirth"
        />
      </div>
      <div>
        { errors.docType && <p>{errors.docType}</p> }
        <Field component="select" name="docType">
          <option value="">Select</option>
          <option value="DNI">DNI</option>
          <option value="LC">LC</option>
        </Field>
      </div>
      <div>
        { errors.docNumber && <p>{errors.docNumber}</p> }
        <Field 
          type="number" 
          name="docNumber" 
        />    
      </div>
      <div>
        { errors.gender && <p>{errors.gender}</p> }
        <Field component="select" name="gender">
          <option value="">Select</option>
          <option value="M">Male</option>
          <option value="F">Female</option>
          <option value="O">Other</option>
        </Field>
      </div>
      <div>
        { errors.nationality && <p>{errors.nationality}</p> }
        <Field component="select" name="nationality">
          <option value="">Select</option>
          <option value="Argentina">Argentina</option>
          <option value="Brazil">Brazil</option>
          <option value="Chile">Chile</option>
          <option value="Uruguay">Uruguay</option>
        </Field>

      </div>
      <div>
        { errors.phone && <p>{errors.phone}</p> }
        <Field 
          type="tel" 
          name="phone" 
        />    
      </div>
      <div>
        { errors.email && <p>{errors.email}</p> }
        <Field 
            type="email" 
            name="email" 
        />   
      </div>

      <button type="submit">Save</button>
    </Form>
  );
};

const MyEnhancedForm = withFormik({
  
  mapPropsToValues: ({firstName,lastName,dateOfBirth,docType,docNumber,gender,nationality,phone,email}) => ({ 
    firstName: firstName || '',
    lastName: lastName || '',
    dateOfBirth: dateOfBirth || '',
    docType: docType || '',
    docNumber: docNumber || '',
    gender: gender || '',
    nationality: nationality || '',
    phone: phone || '',
    email: email || '',
  }),

  validationSchema: Yup.object().shape({
    firstName: Yup.string().required(),

  }),
  
  // Custom sync validation
  validate: values => {

  },

  handleSubmit: (values, { resetForm, setError, setSubmitting }) => {
    console.log(values)

    var objToSend = {};

    objToSend["firstNames"] = values.firstName;
    objToSend["lastNames"] = values.lastName;
    objToSend["dateOfBirth"] = values.dateOfBirth;
    objToSend["documentType"] = values.docType;
    objToSend["documentID"] = values.docNumber;
    objToSend["gender"] = values.gender;
    objToSend["nationality"] = values.nationality;
    objToSend["contact"] = values.email;
    objToSend["relationships"] = [];      

    fetch('http://localhost:8080/personAPI/employees', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(objToSend)
      })
    .then( ()=> { 
      resetForm()
      //this.props.closePopup   
    })
    .catch( () => {
      setError({ firstName: "something wrong with the request" })
    })

  },

})(MyForm);



export class NewEmployeeWithFormik extends React.Component {

  
  render() {
    return (

        <div className="bx-emp-form-container">
            <MyEnhancedForm />
        </div>

    );
}

}

