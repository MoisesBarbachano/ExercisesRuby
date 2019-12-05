FIRST_POSITION = 0

def sum_higher(numbers)
  max_positions = count_rows(numbers){ |row| row.count }

  sum_rows = count_rows(numbers){ |row| row.sum }

  sum_columns = max_sum_columns(numbers, max_positions)

  sum_rows > sum_columns ? sum_rows : sum_columns
end

def count_rows(numbers)
  max_sum = 0

  numbers.each do |row|
    sum_row = yield(row)
    max_sum = sum_row if sum_row > max_sum
  end

  max_sum
end

def max_sum_columns(numbers, max_positions)
  max_sum = 0

  FIRST_POSITION.upto(max_positions) do |position|
    sum_column = 0
    numbers.each do |row|
      sum_column += row[position] if row[position]
    end
    max_sum = sum_column if sum_column > max_sum
  end

  max_sum
end

numbers = [
  [6, 7, 8],
  [1, 4, 29, 104],
  [4, 78]
]

sum_higher(numbers)