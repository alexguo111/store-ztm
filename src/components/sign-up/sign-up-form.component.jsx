import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-inut/form-input.component";
import './sign-up-form.styles.scss'
import Button from "../button/button.component";

const defaultFormFields = { displayName: "", email: "", password: "", confirmPassword: "" };

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const handleChange = event => {
        const { name, value } = event.target;
        setFormFields(Object.assign({}, formFields, { [name]: value }));
    };

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        if (password !== confirmPassword) return;
        event.preventDefault();

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            const userDocRef = await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <form onSubmit={handleSubmit}>
                <FormInput label={"Display Name"} type="text" required onChange={handleChange} name="displayName" value={displayName} />
                <FormInput label={"Email"} type="email" required onChange={handleChange} name="email" value={email} />
                <FormInput label={"Password"} type="password" required onChange={handleChange} name="password" value={password} />
                <FormInput label={"Confirm password"} type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} />
                <Button buttonType="google" type="submit">sign up</Button>
            </form>
        </div>
    )
}

export default SignUpForm;