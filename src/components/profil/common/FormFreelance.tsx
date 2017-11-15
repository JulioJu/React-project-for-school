import * as React from 'react';

export const FormFreelance = () => (
  <div>
    <div className="form__field-wrapper">
        <input
        className="form__field-input"
        id="firstname"
        type="text"
        placeholder="firstname" />
        <label className="form__field-label" htmlFor="firstname">
        Firstname
        </label>
    </div>
    <div className="form__field-wrapper">
        <input
        className="form__field-input"
        id="lastname"
        type="text"
        placeholder="lastname" />
        <label className="form__field-label" htmlFor="lastname">
        Lastname
        </label>
    </div>
    <div className="form__field-wrapper">
        <input
            className="form__field-input"
            id="CV"
            type="file" />
        <label className="form__field-label" htmlFor="CV">
        CV
        </label>
    </div>
  </div>
);

// vim: sw=2 ts=2 et:
