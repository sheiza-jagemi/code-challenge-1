/**
 * Calculates and displays the ingredients needed to make Kenyan Chai (Chai Bora).
 * Prompts the user for the number of cups and logs the results to the console.
 */
function calculateChaiIngredients() {
    // Prompt the user for the number of cups
    const numberOfCups = Number(prompt("Karibu! How many cups of Chai Bora would you like to make?"));
    
    // Validate input (ensure it's a positive number)
    if (isNaN(numberOfCups) || numberOfCups <= 0) {
        console.log("Please enter a valid number of cups (greater than 0).");
        return;
    }

    // Calculate the ingredients per cup
    const waterPerCup = 200; // ml
    const milkPerCup = 50;   // ml
    const teaLeavesPerCup = 1; // tablespoons
    const sugarPerCup = 2;    // teaspoons

    // Total ingredients needed
    const water = waterPerCup * numberOfCups;
    const milk = milkPerCup * numberOfCups;
    const teaLeaves = teaLeavesPerCup * numberOfCups;
    const sugar = sugarPerCup * numberOfCups;

    // Print the results to the console
    console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
    console.log(`- Water: ${water} ml`);
    console.log(`- Milk: ${milk} ml`);
    console.log(`- Tea Leaves (Majani): ${teaLeaves} tablespoons`);
    console.log(`- Sugar (Sukari): ${sugar} teaspoons`);
    console.log("\nEnjoy your Chai Bora! 🍵");
}

// Execute the function
calculateChaiIngredients()