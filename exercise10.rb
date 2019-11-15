def sum_after_zero(numbers)
  sum_numbers = 0
  
  numbers.each do |element|
    digits = element.to_s.scan(/./)
    position_value = digits.rindex('0').next
    value_after_zero = digits[position_value, digits.size].join
    sum_numbers += value_after_zero.to_i if value_after_zero
  end
    
  sum_numbers
end
  
sum_after_zero([1200000265, 1000002360, 1670000800, 1000006002, 1000000233])