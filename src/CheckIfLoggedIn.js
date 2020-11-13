import React from "react";
import { Redirect } from "react-router-dom";

class CheckIfLoggedIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch(
      localStorage.APIRoute +
        "auth-status.php?email=" +
        localStorage.email +
        "&auth_token=" +
        localStorage.auth_token
    )
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            isLoaded: true,
            data: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, data } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh", width: "100vw" }}
        >
          <div className="spinner-border text-light" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    } else {
      const Component = this.props.component;

      if (data.isAuthenticated === true) {
        return data.emailConfirmed ? (
          <Redirect to={{ pathname: "/profile" }} />
        ) : (
          <Redirect to={{ pathname: "/verify-account" }} />
        );
      } else {
        return <Component />;
      }
    }
  }
}

export default CheckIfLoggedIn;
