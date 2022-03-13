const registerForm = [
    {
        type: 'text',
        name: 'username',
        placeholder: 'User Name',
        validation: {
            required: true,
            minLength: 3,
            maxLength: 20
        },
        valid: false,
        touched: false
    },
    {
        type: 'text',
        name: 'firstname',
        placeholder: 'First Name',
        validation: {
            required: true,
            minLength: 3,
            maxLength: 20
        },
        valid: false,
        touched: false
    },
    {
        type: 'text',
        name: 'lastname',
        placeholder: 'Last Name',
        validation: {
            required: true,
            minLength: 3,
            maxLength: 20
        },
        valid: false,
        touched: false
    },
    {
        type: 'email',
        name: 'userEmail',
        placeholder: 'Email',
        validation: {
            required: true,
            isEmail: true
        },
        valid: false,
        touched: false
    },
    {
        type: 'password',
        name: 'userPassword',
        placeholder: 'Password',
        validation: {
            required: true,
            minLength: 6,
            maxLength: 20
        },
        valid: false,
        touched: false
    },
    {
        type: 'text',
        name: 'userGender',
        placeholder: 'Gender',
    }
        

]

export default registerForm;