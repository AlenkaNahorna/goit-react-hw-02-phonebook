import React, { Component } from 'react';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import { Formik, ErrorMessage } from 'formik';
import {
  Button,
  FormEl,
  Input,
  Label,
} from 'components/ContactForm/ContactForm.styled';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().min(7).max(9).positive().integer().required(),
});

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(6),
      name: values.name,
      number: values.number,
    };
    this.props.onSubmit(newContact);
    resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={this.state}
        validationSchema={schema}
        onSubmit={this.handleSubmit}
      >
        <FormEl>
          <Label>
            Name
            <Input type="text" name="name" />
            <ErrorMessage name="name" component="div" />
          </Label>
          <Label>
            Number
            <Input type="tel" name="number" />
            <ErrorMessage name="number" component="div" />
          </Label>

          <Button type="submit">Add contact</Button>
        </FormEl>
      </Formik>
    );
  }
}
