import React from "react";
import { signInWithPhoneNumber, RecaptchaVerifier, PhoneAuthProvider, signInWithCredential } from "firebase/auth";
import { getFirebaseAuth } from "../firebase";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [verificationId, setVerificationId] = React.useState("");
  const [verificationCode, setVerificationCode] = React.useState("");

  React.useEffect(() => {
    window.recaptchaVerifier = new RecaptchaVerifier(getFirebaseAuth, "sign-in-button", {
      size: "invisible",
      callback: (response) => {
        console.log(response);
        onSignInSubmit();
      },
    });
  }, []); // eslint-disable-line

  const onSignInSubmit = async () => {
    try {
      const appVerifier = window.recaptchaVerifier;
      const confirmationResult = await signInWithPhoneNumber(getFirebaseAuth, phoneNumber, appVerifier);
      setVerificationId(confirmationResult?.verificationId);
    } catch (error) {
      /* global grecaptcha */
      window.recaptchaVerifier.render().then((widgetId) => grecaptcha.reset(widgetId));
      console.log(error);
    }
  };

  const onVerifyCodeSubmit = async () => {
    try {
      const credential = PhoneAuthProvider.credential(verificationId, verificationCode);
      await signInWithCredential(getFirebaseAuth, credential);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {!verificationId && (
        <div>
          <input type="text" placeholder="Enter phone number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          <button id="sign-in-button" onClick={onSignInSubmit}>
            Send Verification Code
          </button>
        </div>
      )}
      {verificationId && (
        <div>
          <input type="text" placeholder="Enter verification code" value={verificationCode} onChange={(e) => setVerificationCode(e.target.value)} />
          <button onClick={onVerifyCodeSubmit}>Verify Code</button>
        </div>
      )}
    </div>
  );
};

export default Login;
