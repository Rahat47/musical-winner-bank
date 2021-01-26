const login = document.querySelector('#login')
const loginArea = document.querySelector('.login-area')
const transactionArea = document.querySelector('.transaction-area')
const depositBtn = document.querySelector('#deposit')
const withdrawBtn = document.querySelector('#withdraw')
const depositInput = document.querySelector('#depositInput')
const depositAmmount = document.querySelector('#depositAmmount')
const withdrawInput = document.querySelector('#withdrawInput')
const withdrawAmmount = document.querySelector('#withdrawAmmount')
const balanceAmmount = document.querySelector('#balanceAmmount')
//login btn handler
login.addEventListener('click', () => {
    loginArea.classList.add('d-none')
    transactionArea.classList.remove('d-none')
})

//deposti btn handler
depositBtn.addEventListener('click', () => {
    const depositAmount = parseFloat(depositInput.value)
    let currentDeposit = parseFloat(depositAmmount.textContent)
    let totalDeposit = depositAmount + currentDeposit
    depositAmmount.textContent = totalDeposit
    depositInput.value = ""
    depositInput.focus()
})