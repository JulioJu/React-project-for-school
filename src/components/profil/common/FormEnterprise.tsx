import * as React from 'react';

export const FormEnterprise = () => (
  <div>
    <div className="form__field-wrapper">
        <input
        className="form__field-input"
        id="enterpriseName"
        type="text"
        placeholder="Enterprise name" />
        <label className="form__field-label" htmlFor="enterpriseName">
        Enterprise name
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
