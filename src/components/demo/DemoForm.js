import React, { Component } from 'react';
import './DemoForm.scss';
import Input from './Input';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

const mapDispatchToProps = dispatch => ({
  redirect: () => dispatch(push('/thanks'))
});

class DemoForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      inputs: {},
      errors: {},
      loading: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onValChange = this.onValChange.bind(this);
    this.onFormSuccess = this.onFormSuccess.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    this.setState({
      loading: true
    });

    setTimeout(() => {
      const { inputs } = this.state;
      const errors = this.validateInputs(inputs);

      if (Object.keys(errors).length > 0) {
        this.setState({
          errors,
          loading: false
        });
        return;
      }

      this.onFormSuccess();
    }, 500);
  }

  onFormSuccess() {
    setTimeout(() => {
      this.props.redirect();
    }, 500);
  }

  onValChange(name, value) {
    const { inputs } = this.state;

    inputs[name] = value;
    this.setState({
      inputs
    });
  }

  validateInputs(inputs) {
    const expectedInputs = [
      'firstName', 'lastName', 'email', 'companyName', 'companyType', 'phone'
    ];

    return expectedInputs.map(
        name => {
          if (inputs.hasOwnProperty(name) && typeof inputs[name] === 'string' && inputs[name].trim().length > 0) {
            return null;
          }

          return name;
        }
      ).filter(val => val != null)
      .reduce((acc, name) => {
        acc[name] = `Please fill in this field.`;
        return acc;
      }, {});
  }

  renderInput(name, label, type = 'text') {
    const { errors } = this.state;

    return (
      <Input name={name} label={label} type={type} onChange={this.onValChange} error={errors[name]} />
    )
  }

  render() {
    const { loading } = this.state;

    return (
      <form className="demo-form" onSubmit={this.onSubmit}>
        {this.renderInput('firstName', 'First Name')}
        {this.renderInput('lastName', 'Last Name')}
        {this.renderInput('email', 'Email')}
        {this.renderInput('companyName', 'Company Name')}
        {this.renderInput('companyType', 'Company Type')}
        {this.renderInput('phone', 'Phone')}
        <button className={`button is-primary is-medium is-fullwidth ${loading ? 'is-loading' : ''}`}>Submit</button>
      </form>
    );
  }
}

export default connect(() => ({}), mapDispatchToProps)(DemoForm);
