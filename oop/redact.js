/**
 * Create a program that simulates a bank. The program should have the following classes:
 * Account: This class should represent a bank account. It should have the following properties:
 * - Account number
 * - Account Balance
 * - Account holder name
 * Transaction: This class should represent a bank transaction. It should have the following properties:
 * - Transaction type (deposit, withdrawal, transfer)
 * - Amount
 * - Date and time of transaction
 *
 * Note 1: The program should allow the user to create accounts, deposit money into accounts, withdraw money from accounts, and transfer money between accounts.
 * Node 2: The program should also keep track of all transactions that have been made.
 * Note 3: The program should be able to print out a report of all transactions that have been made.
 */

class Account {
	constructor(accountNumber, accountBalance, accountHolderName) {
		this.accountNumber = accountNumber;
		this.accountBalance = accountBalance;
		this.accountHolderName = accountHolderName;
	}

	deposit(amount) {
		this.accountBalance += amount;
	}

	withdraw(amount) {
		if (this.accountBalance < amount) {
			throw new Error('Insufficient funds');
		}
		this.accountBalance -= amount;
	}

	transfer(amount, toAccount) {
		if (this.accountBalance < amount) {
			throw new Error('Insufficient funds');
		}
		this.withdraw(amount);
		toAccount.deposit(amount);
	}
}

// Transaction class
class Transaction {
	constructor(transactionType, amount, date, time) {
		this.transactionType = transactionType;
		this.amount = amount;
		this.date = date;
		this.time = time;
	}
}

