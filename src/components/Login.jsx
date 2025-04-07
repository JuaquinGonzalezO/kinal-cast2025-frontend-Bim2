import { useState } from "react";
import { Logo } from './Logo'
import { Input } from './Input';
import { 
    emailValidationMessage,
    validateEmail,
    validatePasswordMessage,
    validatePassword
  

} from '../shared/validators'
import { useLogin } from "../shared/hooks";

export const Login = ({switchAuthHandler})=>{
    const { login,isLoandig } = useLogin();
    const [formState, setFormState] = useState({
        email:{
            value:'',
            isValid: false,
            showError: false
        },
        password:{
            value:'',
            isValid: false,
            showError: false
        }
    });


const handleInputValueChange = (value, field)=>{
    setFormState((prevState) => ({
        ...prevState,
        [field]:{
            ...prevState[field],
            value
        }
    }))

}

    const handleInputValidationOnBlur = (value, field) =>{
        let isValid = false;
        switch(field){
            case 'email':
                isValid = validateEmail(value);
                break;
            case 'password':
                isValid = validatePassword(value);
                break;

        }

        setFormState((prevState)=>({
            ...prevState,
            [field]:{
                ...prevState[field],
                isValid,
                showError: !isValid
            }
        }));

    }


    const handleLogin = (event) =>{
        event.preventDefault();
        login(formState.email.value, formState.password.value);
    }

    const isSubmitButtonDisiable = isLoandig ||!formState.email.isValid || !formState.password.isValid

    return(
        <div className="login-container">
            <Logo text={'login Kinal Cast'}/>
            <form className="auth/fomr"/>
            <Input
                    field='email'
                    label='Email'
                    value={formState.email.value}
                    onChangeHandler={handleInputValueChange}
                    type='text'
                    onBurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.email.showError}
                    validationMessage={emailValidationMessage}
                />
                  <Input
                    field='password'
                    label='Password'
                    value={formState.password.value}
                    onChangeHandler={handleInputValueChange}
                    type='password'
                    onBurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.password.showError}
                    validationMessage={validatePasswordMessage}
                />

                <button onClick={handleLogin} disabled={isSubmitButtonDisiable}>
                    log in
                </button>
            <form/>
            <span onClick={switchAuthHandler} className="auth-form-switch-label">
                Don' t have an acconunt ? sing up
            </span>
        </div>
    )

}