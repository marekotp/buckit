function SignUpValidation(values) {
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    //first name validation
    if(values.first_name === "") {
        error.first_name = "* This field cannot be empty"
    }
    else {
        error.first_name = ""
    }

    //last name validation
    if(values.last_name === "") {
        error.last_name = "* This field cannot be empty"
    }
    else {
        error.last_name = ""
    }

    //email validation
    if(values.email === "") {
        error.email = "* Email should not be empty"
    }
    else if(!email_pattern.test(values.email)) {
        error.email = "Please type in a valid email address"
    }else {
        error.email = ""
    }

    //phone number validation
    if(values.phone_number === "") {
        error.phone_number = "* This field cannot be empty"
    }
    else {
        error.phone_number = ""
    }
    
    //password validation
    if(values.password === "") {
        error.password = "* Password should not be empty"
    }
    else if(!password_pattern.test(values.password)) {
        error.password = "Password should contain at least one uppercase letter, one lowercase letter, one number, and be at least 8 characters long"
    }else {
        error.password = ""
    }
    
    return error;
}

export default SignUpValidation