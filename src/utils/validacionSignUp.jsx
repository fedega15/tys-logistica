export const validacionSignUp = (obj) => {

    let errors = {
        ...errors,
        'useremail': null,
        'password': null,
    }
    let correct = true;

    if (obj.user === null) {
        correct = false
        errors = {
            ...errors,
            'user:': 'incorrrecto'
        }
    }

    if (obj.user === null) {
        correct = false
        errors = {
           ...errors,
            'password:': 'incorrrecto'
        }
        return [correct, errors]

}
}