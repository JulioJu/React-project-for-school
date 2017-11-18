import * as React from 'react';

export const FormCompany = () => (
  <div>
    <div className="form__field-wrapper">
        <input
        className="form__field-input"
        id="companyName"
        type="text"
        placeholder="Company name" />
        <label className="form__field-label" htmlFor="companyName">
        Company name
        </label>
    </div>
    <div className="form__field-wrapper">
        <input
        className="form__field-input"
        id="siret"
        type="text"
        placeholder="SIRET" />
        <label className="form__field-label" htmlFor="siret">
        SIRET
        </label>
    </div>
  </div>
);

// vim: sw=2 ts=2 et:
