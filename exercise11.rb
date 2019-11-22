#!/bin/ruby

require 'json'
require 'stringio'

# Complete the birthday function below.
def birthday(s, d, m)
  number_ways = 0;

  s.each_with_index do |element, position|
    number_ways += 1 if s[position..( position + (m - 1) )].sum == d
  end

  number_ways
end

fptr = File.open(ENV['OUTPUT_PATH'], 'w')

n = gets.strip.to_i

s = gets.rstrip.split.map(&:to_i)

dm = gets.rstrip.split

d = dm[0].to_i

m = dm[1].to_i

result = birthday s, d, m

fptr.write result
fptr.write "\n"

fptr.close()
