import * as React from 'react';

export class FormWrapper extends React.Component<{title}> {

  constructor (props) {
    super(props);
  }

  render() {
    const { title, children } = this.props;
    return (
      <div className="form-page__wrapper">
        <div className="form-page__form-wrapper">
          <div className="form-page__form-header">
            <h2 className="form-page__form-heading">{title}</h2>
            {children}
          </div>
        </div>
      </div>
    );
  }

}

// vim: sw=2 ts=2 et:
