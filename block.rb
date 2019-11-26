def calculate(first_number, second_number)
  yield(first_number, second_number) if block_given?
end

calculate(15, 10) {|a, b| a - b}
calculate(15, 10) {|a, b| a + b}
calculate(15, 10) {|a, b| a * b}
calculate(15, 10) {|a, b| a / b}