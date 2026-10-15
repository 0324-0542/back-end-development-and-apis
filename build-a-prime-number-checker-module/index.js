function isPrime(num) {
  // Prime numbers must be greater than 1
  if (num <= 1) return false;
  
  // Check for divisors up to the square root of the number
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  
  return true;
}

// Export the function as a named property
module.exports = { isPrime };
