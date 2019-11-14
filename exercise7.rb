FIRST_POSITION = 0

def multiply_without_current(list_numbers)
  last_position_list = list_numbers.size - 1
  numbers_multiplied = []
  numbers_selected = []

  FIRST_POSITION.upto(last_position_list) do |iteration|
    numbers_selected = list_numbers.reject.each_with_index{|position, index| index == iteration}
    numbers_multiplied[iteration] = numbers_selected.inject(:*)
  end

  numbers_multiplied
end

multiply_without_current([1, 2, 3, 4])
