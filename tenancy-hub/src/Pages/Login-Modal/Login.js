import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import FormInput from "../../components/Form-input/form-input.component";
// import LoginBtn from "../../components/CustomButton/CustomButton";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions/AuthAction";

const Login = ({ login, isAuthenticated }, ...props) => {
  useEffect(() => {
    if (localStorage.token) {
      history.push("/admin");
      // window.href = "/admin";
      console.log("ddffssd");
    }

    // if (error === "Invalid Credentials") {
    //   setAlert(error, "danger");
    //   clearError();
    // }
    // eslint-disable-next-line
  }, [isAuthenticated, props.history]);

  const history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [show, setShow] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("see mrere");
    const { email, password } = user;
    login({ email, password });
  };

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="form-container">
      <span onClick={() => setShow(true)}>Login</span>

      <Modal
        {...props}
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h1>
              Account <span style={{ color: "#004182" }}> Login</span>
            </h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={onSubmit}>
            <div className="formGroup">
              <label htmlFor="email">Email</label>
              <FormInput
                type="email"
                name="email"
                // value={email}
                placeholder="Enter email Address"
                onChange={onChange}
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="password">Password</label>
              <FormInput
                type="password"
                name="password"
                // value={password}
                placeholder="Enter password"
                onChange={onChange}
                required
              />
            </div>

            <FormInput
              onClick={onSubmit}
              style={{ width: "100%", color: "black", background: "grey" }}
              type="submit"
              value="Login"
            />
            {/* Login */}
            {/* </FormInput> */}

            <small
              style={{ color: "#223564", fontSize: " 10px", opacity: "1" }}
            >
              This site is protected by reCAPTCHA and the Google Privacy Policy
              and Terms of Service apply.
            </small>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};
const mapStateToProps = (state) => ({
  authState: state.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
