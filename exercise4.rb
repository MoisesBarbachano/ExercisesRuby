#!/bin/ruby

require 'json'
require 'stringio'

# Complete the plusMinus function below.
def plusMinus(arr)
  higher_zero = 0
  equal_zero = 0
  less_zero = 0
  
  arr.each do |element|
    next higher_zero += 1 if element.positive?
    next less_zero += 1 if element.negative?
    equal_zero += 1 if element.zero?
  end

  puts higher_zero.fdiv(arr.size)
  puts less_zero.fdiv(arr.size)
  puts equal_zero.fdiv(arr.size)
end

n = gets.to_i

arr = gets.rstrip.split(' ').map(&:to_i)

plusMinus arr
