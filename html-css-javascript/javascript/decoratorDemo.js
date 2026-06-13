// 1. The Decorator function
function memoizeDecorator(originalFunc) {
  const cache = new Map(); // Where we store past results

  return function(x) {
    if (cache.has(x)) {
      console.log(`[Cache Hit] Fetching ${x} from memory...`);
      return cache.get(x);
    }

    // If not in cache, run the original function and save the result
    console.log("Curor is HERE");
    
    const result = originalFunc(x);
    console.log("RESULT: ", result);
      
    cache.set(x, result);
    return result;
  };
}

// 2. The slow, original function
function heavyCalculation(num) {
  console.log(`...Calculating ${num} (takes 3 seconds)...`);
  return num * 2; 
}

// 3. "Wrap" the original function inside the decorator
const optimizedCalculation = memoizeDecorator(heavyCalculation);

// 4. Testing it out
console.log(optimizedCalculation(5)); // Runs the full calculation
console.log(optimizedCalculation(5)); // Fast! Grabs it from the cache