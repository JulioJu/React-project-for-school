import * as React from 'react';
import { FormWrapper } from '../common';
import { RegisterCommun, FormCompany } from './';

export const RegisterCompany = () => (
  <FormWrapper title="Register Company">
    <RegisterCommun>
      <FormCompany />
    </RegisterCommun>
  </FormWrapper>
);

// vim: sw=2 ts=2 et:
