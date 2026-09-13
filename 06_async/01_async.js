// synchronus - > ek ke bad ek execute hota hai.
// single threaded - > ek thread pe sab execute hoga.

// bloking code -> bas code rahi ruk jayega aage kcuh execute nahi hoga.
// non blocking code ->bas kuch code block hoga , baki pora code execicute hoga.

// ***********************************************************************

// ----------------> setTimeout() <-----------------------------
// Ek baar specified time ke baad callback chalata hai.

const timer = setTimeout(() => {
  console.log("Hello");
}, 5000);

setTimeout(() => {
  clearTimeout(timer); // if cancel karna hua to ??
  console.log("Timer cancel ho gaya");
}, 2000);