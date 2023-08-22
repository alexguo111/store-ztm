
import FormInput from "../form-inut/form-input.component";
import { useState } from "react";
import Button from "../button/button.component";
import { signInWithGooglePopup, createUserDocumentFromAuth, signinWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import './sign-in-form.styles.scss'

const defaultCredentials = {
    email: "",
    password: ""
}

const SignInForm = () => {

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
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }

    const handleSubmit = async (event) => {
        console.log("signing in...");
        event.preventDefault();
        try {
            const response = await signinWithEmailAndPassword(email, password);
            console.log("sign in success->", response);
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
        <div className="sign-in-container">
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
                <div className="buttons-container">
                    <Button type="submit">sign in</Button>
                    <Button type="button" buttonType={"google"} onClick={signInWithGoogle}>
                        Google Sign in
                    </Button>
                </div>
            </form>

        </div>
    )
}

export default SignInForm;