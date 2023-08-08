function exponentiationRecursive(x, n) {
    if (n === 0) return 1;
    if (n === 1) return x;
  
    if (n % 2 === 0) {
      // Jika n genap, gunakan rekursi untuk menghitung (x^(n/2))^2
      const halfExp = exponentiationRecursive(x, n / 2);
      return halfExp * halfExp;
    } else {
      // Jika n ganjil, gunakan rekursi untuk menghitung x * (x^((n-1)/2))^2
      const halfExp = exponentiationRecursive(x, (n - 1) / 2);
      return x * halfExp * halfExp;
    }
  }
  
  // Contoh penggunaan
  console.log(exponentiationRecursive(2, 3));       // 8
  console.log(exponentiationRecursive(2, 12));      // 4096
  console.log(exponentiationRecursive(7, 2));       // 49
  console.log(exponentiationRecursive(9, 3));       // 729
  console.log(exponentiationRecursive(22, 5));      // 5153632
  console.log(exponentiationRecursive(1996, 0));    // 1
  console.log(exponentiationRecursive(4213, -3));   // “wrong input”
