import * as React from 'react';
import { FormWrapper } from '../common';
import { RegisterCommun, FormEnterprise } from './';

export const RegisterEnterprise = () => (
  <FormWrapper title="Register Enterprise">
    <RegisterCommun>
      <FormEnterprise />
    </RegisterCommun>
  </FormWrapper>
);

// vim: sw=2 ts=2 et:
