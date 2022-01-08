import React, { Component } from "react";

export class BadgeForm extends Component {
  handleClick = (e) => {
    console.log("Button was clicked");
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              className="form-control"
              type="text"
              name="firstName"
              value={this.props.formValues.firstName}
              onChange={this.props.onChange}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              className="form-control"
              type="text"
              name="lastName"
              value={this.props.formValues.lastName}
              onChange={this.props.onChange}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              value={this.props.formValues.email}
              onChange={this.props.onChange}
            />
          </div>
          <div className="form-group">
            <label>Job Title</label>
            <input
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.props.formValues.jobTitle}
              onChange={this.props.onChange}
            />
          </div>
          <div className="form-group">
            <label>Twitter</label>
            <input
              className="form-control"
              type="text"
              name="twitter"
              value={this.props.formValues.twitter}
              onChange={this.props.onChange}
            />
          </div>
          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
          {this.props.error && <p>{this.props.error.message}</p>}
        </form>
      </React.Fragment>
    );
  }
}

export default BadgeForm;
