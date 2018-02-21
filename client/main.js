$(document).ready(addClickHandlers);

function addClickHandlers(){
    $('#register').on('click', ()=> {
        register()
    })
    $('#signIn').on('click', () => {
        signIn()
    })
    $('#get-user').on('click', () => {
        getUser()
    })
}

function register(){
    const values = {
        email: $('#email').val(),
        givenName: $('#givenName').val(),
        familyName: $('#familyName').val(),
        password: $('#password').val()
    }

    console.log('values', values)

    $.ajax({
        url: '/signup',
        method: 'post',
        data: values,
        success: response => {
            console.log('register response', response)
        },
        error: err => {
            console.log('error', err)
        }
    })
  
}

function signIn() {
    const values = {
        email: $('#email-signIn').val(),
        password: $('#password-signIn').val()
    }

    console.log('signIn values', values)

    $.ajax({
        url: '/signin',
        method: 'post',
        data: values,
        success: res => {
            console.log('sign in response', res)
            localStorage.setItem('token', res.token)
        },
        error: err => {
            console.log('error', err)
        }
    })
}

function getUser(){
    console.log('i\'m running')
    $.ajax({
        url: '/another-route',
        method: 'post',
        headers: {
            authorization: localStorage.getItem('token')
        },
        success: res => {
            console.log('Get User response', res)
        },
        error: err => {
            console.log('error', err)
        }
    }) 
} 
