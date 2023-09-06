// import './form-input.styles.scss'
import { GroupContainer, FormInputLabel, FormInputComponent } from './form-input.styles';

const FormInput = ({ label, ...otherProps }) => {

    return (
        // <div className="group">
        //     <input className="form-input" {...otherProps} />
        //     <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
        // </div>
        <GroupContainer>
            <FormInputComponent {...otherProps} />
            <FormInputLabel shrink={otherProps.value}>{label}</FormInputLabel>
        </GroupContainer>
    )
}

export default FormInput;