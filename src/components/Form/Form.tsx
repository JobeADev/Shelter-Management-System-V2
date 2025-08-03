import { useState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import Popup from "../Popup/Popup";
import "./Form.css";

function ContactInput(props) {
  const { pending } = useFormStatus();
  return (
    <input
      className={!props.hasError ? "form-input" : "form-input hasError"}
      disabled={pending}
      name={props.name}
      type={props.type}
      value={props.value}
      placeholder={props.placeholder}
      required={props.required}
      onChange={(e) => {
        props.setter(e.target.value);
      }}
    />
  );
}

function Form(props) {
  const [showPopup, setShowPopup] = useState(false);
  const [popupText, setPopupText] = useState("");
  const [error, setError] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [preferredName, setPreferredName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [street, setStreet] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [infoSection, setInfoSection] = useState("");
  const [ageVerification, setAgeVerification] = useState("Yes");
  const [familyVerification, setFamilyVerification] = useState("Yes");

  // const mobileCheck = () => {
  //   if (window.innerWidth <= 430) {

  //   }
  // }

  // useEffect(()=> {
  //   mobileCheck()
  // }, [])

  // console.log(firstName);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.toLowerCase() != confirmEmail.toLowerCase()) {
      setError(true);
      setPopupText("Emails Do Not Match");
      setShowPopup(true);
    } else {
      // do api stuff here
      // add conditional if api response is successful
      setPopupText("Application Successfully Submitted!");
      setShowPopup(true);
      setFirstName("");
      setLastName("");
      setPreferredName("");
      setPhoneNumber("");
      setStreet("");
      setAddress("");
      setEmail("");
      setConfirmEmail("");
      setInfoSection("");
      setAgeVerification("Yes");
      if (props.isVolunteerPage) {
        setFamilyVerification("Yes");
      }
    }
  };

  console.log(ageVerification);

  return (
    <div className="form-page-container">
      <section className="form-container">
        <form className="form-inputs-container" onSubmit={handleSubmit}>
          <span className="form-inputs">
            <ContactInput
              type="text"
              name="firstName"
              value={firstName}
              placeholder="First Name"
              setter={setFirstName}
              required={true}
            />
            <ContactInput
              type="text"
              name="lastName"
              value={lastName}
              placeholder="Last Name"
              setter={setLastName}
              required={true}
            />
            <ContactInput
              type="text"
              name="preferredName"
              value={preferredName}
              placeholder="Preferred Name"
              setter={setPreferredName}
            />
            <ContactInput
              type="tel"
              name="phoneNumber"
              value={phoneNumber}
              placeholder="Phone Number"
              setter={setPhoneNumber}
              required={true}
            />
            <ContactInput
              type="text"
              name="street"
              value={street}
              placeholder="Street Address"
              setter={setStreet}
              required={true}
            />
            <ContactInput
              type="text"
              name="address"
              value={address}
              placeholder="City, State, and Zip Code"
              setter={setAddress}
              required={true}
            />
            <ContactInput
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              setter={setEmail}
              required={true}
              hasError={error}
            />
            <ContactInput
              type="email"
              name="confirmEmail"
              value={confirmEmail}
              placeholder="Confirm Email"
              setter={setConfirmEmail}
              required={true}
              hasError={error}
            />
          </span>
          {props.formTheme != "" ? (
            <textarea
              className="form-input"
              value={infoSection}
              placeholder={props.formTheme}
              name="message"
              rows={2}
              onChange={(e) => {
                setInfoSection(e.target.value);
              }}
              required={props.isVolunteerPage || props.isSurrenderPage}
            />
          ) : null}
          <span className="form-radio-inputs">
            <div>
              <p className="form-radio-title">Are You Over 18?</p>
              <label className="form-radio-label" htmlFor="over18YesResponse">
                <input
                  className="form-radio-input"
                  type="radio"
                  id="over18YesResponse"
                  name="over18YesResponse"
                  value="Yes"
                  checked={ageVerification === "Yes"}
                  onChange={(e) => setAgeVerification(e.target.value)}
                />
                 <span className="form-radio-label-text">Yes</span>
              </label>
              <label className="form-radio-input" htmlFor="over18NoResponse">
                <input
                  className="form-radio-input"
                  type="radio"
                  id="over18NoResponse"
                  name="over18YesResponse"
                  value="No"
                  checked={ageVerification === "No"}
                  onChange={(e) => setAgeVerification(e.target.value)}
                />
                <span className="form-radio-label-text">No</span>
              </label>
            </div>
            {props.isVolunteerPage ? (
              <div>
                <p className="form-radio-title">
                  Do You Plan To Bring Friends/Family
                </p>
                <label className="form-radio-label" htmlFor="familyYesResponse">
                  <input
                    className="form-radio-input"
                    type="radio"
                    id="familyYesResponse"
                    name="familyYesResponse"
                    value="Yes"
                    checked={familyVerification === "Yes"}
                    onChange={(e) => setFamilyVerification(e.target.value)}
                  />
                   <span className="form-radio-label-text">Yes</span>
                </label>
                <label className="form-radio-input" htmlFor="familyNoResponse">
                  <input
                    className="form-radio-input"
                    type="radio"
                    id="familyNoResponse"
                    name="familyNoResponse"
                    value="No"
                    checked={familyVerification === "No"}
                    onChange={(e) => setFamilyVerification(e.target.value)}
                  />
                  <span className="form-radio-label-text">No</span>
                </label>
              </div>
            ) : null}
          </span>
          <button className="form-btn" type="submit">
            Submit
          </button>
        </form>
      </section>
      <Popup
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        text={popupText}
        isError={error}
        setError={setError}
      />
    </div>
  );
}

export default Form;
