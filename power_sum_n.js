function sum_n_power_n(n) {
  var result = 0;
  for (var i = 1; i <= n; ++i) {
    result += i ** i;
  }

  console.log(result);
}

sum_n_power_n(2);
sum_n_power_n(3);
