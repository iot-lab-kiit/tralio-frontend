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
    },
    {
        type: 'email',
        name: 'userEmail',
        placeholder: 'Email',
        validation: {
            required: true,
            isEmail: true
        },
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
    },
    // {
    //     type: 'password',
    //     name: 'userConfirmPassword',
    //     placeholder: 'Confirm Password',
    //     validation: {
    //         required: true,
    //         minLength: 6,
    //         maxLength: 20
    //     },
    // },
]

export default registerForm;