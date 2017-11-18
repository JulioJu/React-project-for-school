import * as React from 'react';
import { Link } from 'react-router-dom';
import { FormWrapper } from '../common';

export const RegisterPage = () => (
  <FormWrapper title="Register: Are you freelance or an enteprise?">
    <Link to="/register-company"
        className="btn btn--dash btn--nav">
      Create a company account
    </Link>
    <br />
    <br />
    <Link to="/register-freelance"
        className="btn btn--dash btn--nav">
      Create a freelence account
    </Link>
  </FormWrapper>
);

// vim: sw=2 ts=2 et:
