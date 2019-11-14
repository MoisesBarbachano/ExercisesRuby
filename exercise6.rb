#!/bin/ruby

require 'json'
require 'stringio'

# Complete the staircase function below.
FIRST_STEP = 1
def staircase(n)
  FIRST_STEP.upto(n) do |number_step|
    puts (" " * (n - number_step) ) + ("#" * number_step)
  end
end

n = gets.to_i

staircase n
