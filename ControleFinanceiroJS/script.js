const transactionsUl = document.querySelector('#transactions');
const incomeDisplay = document.querySelector('#money-plus');
const expenseDisplay = document.querySelector('#money-minus');
const balanceDisplay = document.querySelector('#balance');
const form = document.querySelector('#form');
const inputTransactionName = document.querySelector('#text');
const inputTransactionAmount = document.querySelector('#amount');

//console.log({incomeDisplay, expenseDisplay, balanceDisplay})

const localStorageTransactions = JSON.parse(localStorage
    .getItem('transactions'));
let transactions = localStorage
    .getItem('transactions') !== null ? localStorageTransactions : []

const removeTransaction = ID =>{
    transactions = transactions.filter(transactions => 
        transactions.id !== ID);
    updateLocalStorage();
    init();
}

const addTransactionIntoDOM = transaction => {
    const operator = transaction.amount < 0 ? '-' : '+';
    const CSSClass = transaction.amount < 0 ? 'minus' : 'plus';
    const amountWithoutOperator = Math.abs(transaction.amount); // metodo math.abs retorna o numero sem sinal de subtração ou adição
    const li = document.createElement('li');

    li.classList.add(CSSClass)
    li.innerHTML = `
        ${transaction.name}
        <span>${operator} R$ ${amountWithoutOperator}</span>
        <button class="delete-btn" onClick="removeTransaction(${transaction.id})">
            x
        </button>
    `;
    transactionsUl.append(li); 
}

const getExpenses = transactionAmounts => Math.abs(transactionAmounts // abs retira o sinal antes do numero ex -30 fica 30
    .filter(value => value < 0)
    .reduce((accumulator, value) => accumulator + value, 0))
    .toFixed(2); 

const getIncome = transactionAmounts => transactionAmounts
    .filter(value => value > 0 )
    .reduce((accumulator, value) => accumulator + value, 0)
    .toFixed(2); // o filter insere em um novo array apenas os valores maiores que 0, o reduce para somar o array   

const getTotal = transactionAmounts => transactionAmounts
    .reduce((accumulator, transaction) => accumulator + transaction, 0)
    .toFixed(2); //soma do array, accumulator armazena o resultado atual do array e a transaction armazena o proximo elemento do array

const updateBalanceValues = () => {
    const transactionAmounts = transactions.map(({amount}) => amount)
    const total = getTotal(transactionAmounts)
    const income = getIncome(transactionAmounts);
    const expense =  getExpenses(transactionAmounts);
    
    balanceDisplay.textContent = `R$ ${total}`;
    incomeDisplay.textContent = `R$ ${income}`;
    expenseDisplay.textContent = `R$ ${expense}`;
}

const init = () => {
    transactionsUl.innerHTML = '';
    transactions.forEach(addTransactionIntoDOM);
    updateBalanceValues();
}

init();

const updateLocalStorage = () => {
    localStorage.setItem('transactions', JSON.stringify(transactions)) // setItem salva a informação no localStorage
}

const generateId = () => Math.round(Math.random() * 1000); // gera um numero aleatorio de 0 a 1000

const addToTransactionsArray = (transactionName, transactionAmount) => {
    transactions.push({ 
        id: generateId(),
        name: transactionName, 
        amount: Number(transactionAmount)// ou +transactionAmount
    })
}

const CleanInputs = () => {
    inputTransactionName.value = ''; // limpando os inputs
    inputTransactionAmount.value = '';
}

const handleFormSubmit = event => {
    event.preventDefault();

    const transactionName = inputTransactionName.value.trim(); // trim remove qualquer espaço em branco da string
    const transactionAmount = inputTransactionAmount.value.trim();
    const isSomeInputEmpty = transactionName === '' || transactionAmount === '';

    if(isSomeInputEmpty){ 
        alert('Por favor preencha tanto o nome quanto o valor da transação')
        return;
    }

    addToTransactionsArray(transactionName,transactionAmount)
    init()
    updateLocalStorage()
    CleanInputs()
}

form.addEventListener('submit',handleFormSubmit)