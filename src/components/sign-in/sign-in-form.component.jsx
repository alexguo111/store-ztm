import FormInput from "../form-inut/form-input.component";
import { useEffect, useState } from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { signInWithGooglePopup, createUserDocumentFromAuth, signinWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
// import './sign-in-form.styles.scss'
import { SigninContainer, ButtonContainer } from "./sign-in-form.styles";

const defaultCredentials = {
    email: "",
    password: ""
}

const SignInForm = () => {
    console.log("SIGN IN FORM")
    const [credentials, setCredentials] = useState(defaultCredentials);
    const { email, password } = credentials;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCredentials({ ...credentials, [name]: value });
    }

    const resetFormFields = () => {
        setCredentials(defaultCredentials);
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }

    const handleSubmit = async (event) => {
        console.log("signing in...");
        event.preventDefault();
        try {
            const { user } = await signinWithEmailAndPassword(email, password);
            console.log("sign in success->", user);
            resetFormFields();
        } catch (e) {
            switch (e.code) {
                case "auth/wrong-password":
                    alert("incorrect password or email");
                    break;
                case "auth/user-not-found":
                    alert("no user associated with this email");
                    break;
                default:
                    console.log(e);
            }
        }
    }

    return (
        <SigninContainer>
            <h2>I already have an account</h2>
            <span>Sign in with email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label={"Email"}
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email} />
                <FormInput
                    label={"Password"}
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password} />
                <ButtonContainer>
                    <Button type="submit">sign in</Button>
                    <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>
                        Google Sign in
                    </Button>
                </ButtonContainer>
            </form>

        </SigninContainer>
    )
}

export default SignInForm;