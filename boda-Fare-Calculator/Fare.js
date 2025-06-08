function calculateBodaFare() {
    // Prompt the user for distance
    const distanceInput = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
    
    // Convert input to a number
    const distanceInKm = parseFloat(distanceInput);
    
    // Check if input is valid
    if (isNaN(distanceInKm) || distanceInKm < 0) {
        console.log("Hiyo si umbali sahihi. Tafadhali ingiza namba halisi.");
        return;
    }
    
    // Fare calculation
    const baseFare = 50;
    const chargePerKm = 15;
    const distanceCharge = distanceInKm * chargePerKm;
    const totalFare = baseFare + distanceCharge;
    
    // Display results
    console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
    console.log(`Mpaka Uko: KES ${distanceCharge}`);
    console.log(`Total: KES ${totalFare}`);
    console.log("\nPanda Pikipiki!");
}

// Call the function to execute
calculateBodaFare();