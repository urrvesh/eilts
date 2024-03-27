import React from "react";
import { signInWithPhoneNumber, RecaptchaVerifier, PhoneAuthProvider, signInWithCredential } from "firebase/auth";
import { getFirebaseAuth } from "../firebase";
import { useContext } from "../context/context";

const Login = () => {
  const { setStore } = useContext();
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [verificationId, setVerificationId] = React.useState("");
  const [verificationCode, setVerificationCode] = React.useState("");

  const onSignInSubmit = async () => {
    setStore({ isLoading: true });
    const captchaVerifier = new RecaptchaVerifier(getFirebaseAuth, "recaptcha-container", {
      size: "invisible",
      /* global grecaptcha */
      "expired-callback": () => captchaVerifier.render().then((widgetId) => grecaptcha.reset(widgetId)),
    });
    try {
      const confirmationResult = await signInWithPhoneNumber(getFirebaseAuth, phoneNumber, captchaVerifier);
      setVerificationId(confirmationResult?.verificationId);
    } catch (error) {
      /* global grecaptcha */
      captchaVerifier.render().then((widgetId) => grecaptcha.reset(widgetId));
      console.error("Error signing in:", error);
    } finally {
      setStore({ isLoading: false });
    }
  };

  const onVerifyCodeSubmit = async () => {
    setStore({ isLoading: true });
    try {
      const credential = PhoneAuthProvider.credential(verificationId, verificationCode);
      await signInWithCredential(getFirebaseAuth, credential);
    } catch (error) {
      console.error("Error verifying code:", error);
    } finally {
      setStore({ isLoading: false });
    }
  };

  return (
    <div>
      {!verificationId && (
        <div>
          <input type="text" placeholder="Enter phone number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          <button onClick={onSignInSubmit}>Send Verification Code</button>
        </div>
      )}
      {verificationId && (
        <div>
          <input type="text" placeholder="Enter verification code" value={verificationCode} onChange={(e) => setVerificationCode(e.target.value)} />
          <button onClick={onVerifyCodeSubmit}>Verify Code</button>
        </div>
      )}
      <div id="recaptcha-container" style={{ display: "none" }} />
    </div>
  );
};

export default Login;
