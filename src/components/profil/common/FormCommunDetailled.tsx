import * as React from 'react';

export const FormCommunDetailled = () => (
  <div>
    <div className="form__field-wrapper">
      <input
          className="form__field-input"
          id="confirmPassword"
          type="password"
          placeholder="••••••••••"
        />
      <label className="form__field-label" htmlFor="confirmPassword">
        Confirm password
      </label>
    </div>
    <div className="form__field-wrapper">
      <input
          className="form__field-input"
          id="email"
          type="email"
          placeholder="email"
        />
      <label className="form__field-label" htmlFor="email">
        Email
      </label>
    </div>
    <div className="form__field-wrapper">
      <input
          className="form__field-input"
          id="photo"
          type="file" />
      <label className="form__field-label" htmlFor="photo">
        Photo
      </label>
    </div>
  </div>
);

// vim: sw=2 ts=2 et:
