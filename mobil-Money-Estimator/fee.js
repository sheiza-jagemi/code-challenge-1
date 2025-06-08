// Simplified Transaction Fee Estimator
function estimateTransactionFee() {
    // Prompt user for amount to send
    const amountInput = prompt("Unatuma Ngapi? (KES):");
    
    // Convert input to number and validate
    const amountToSend = parseFloat(amountInput);
    
    // Check if input is valid
    if (isNaN(amountToSend) || amountToSend <= 0) {
        console.log("Invalid amount. Please enter a positive number.");
        return;
    }
    
    // Calculate fee with min/max constraints
    const baseFee = amountToSend * 0.015;
    const transactionFee = Math.max(10, Math.min(baseFee, 70));
    const totalDebit = amountToSend + transactionFee;
    
    // Display results
    console.log(`Sending KES ${amountToSend}:`);
    console.log(`Calculated Transaction Fee: KES ${transactionFee}`);
    console.log(`Total amount to be debited: KES ${totalDebit}`);
    console.log("\nSend Money Securely!");
}

// Execute the function
estimateTransactionFee();