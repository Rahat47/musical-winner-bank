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

//deposit btn handler
depositBtn.addEventListener('click', () => {
    let depositAmount = parseFloat(depositInput.value)
    let currentDeposit = parseFloat(depositAmmount.textContent)

    let totalDeposit = depositAmount + currentDeposit
    const currentBalanceNum = parseFloat(balanceAmmount.textContent)
    const totalBalance = depositAmount + currentBalanceNum

    balanceAmmount.textContent = totalBalance
    depositAmmount.textContent = totalDeposit
    depositInput.value = ""
    depositInput.focus()
})

withdrawBtn.addEventListener('click', () => {
    const withdrawAmount = parseFloat(withdrawInput.value)
    const currentWithdraw = parseFloat(withdrawAmmount.textContent)

    const totalWithdraw = withdrawAmount + currentWithdraw

    const currentBalanceNum = parseFloat(balanceAmmount.textContent)
    const totalBalance = currentBalanceNum - withdrawAmount

    withdrawAmmount.textContent = totalWithdraw
    balanceAmmount.textContent = totalBalance

    withdrawInput.value = ""
    withdrawInput.focus()

})