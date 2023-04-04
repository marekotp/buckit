function LoginValidation(values) {
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    //email validation
    if(values.email === "") {
        error.email = "* Email should not be empty"
    }
    else if(!email_pattern.test(values.email)) {
        error.email = "Email does not match an existing user"
    }else {
        error.email = ""
    }

    //password validation
    if(values.password === "") {
        error.password = "* Password should not be empty"
    }
    else if(!password_pattern.test(values.password)) {
        error.password = "Password does not match an existing user"
    }else {
        error.password = ""
    }
    
    return error;
}

export default LoginValidation