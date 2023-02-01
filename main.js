const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirm-password')
const passwordWarning = document.querySelector('.password.after')

confirmPassword.addEventListener('change', () => {
    console.log(password, confirmPassword, passwordWarning.style.display)
    return password.value !== confirmPassword.value ? passwordWarning.style.display = 'block' : passwordWarning.style.display = 'none';
})