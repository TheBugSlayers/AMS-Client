export const validate = (values) => {
    const errors = {};

    if (!values.email) {
        errors.email = "Required!";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email address!";
    }

    if (!values.password) {
        errors.password = "Password is Required!";
    } else if (values.password.length < 8) {
        errors.password = "Password length must be atleast 8 characters!";
    } else if (values.password.length > 15) {
        errors.password = "Password length must not exceed 15 characters!";
    }


    return errors;
};