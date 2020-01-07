def consecutive_alphabet?(letters)
  letters.each do |binary|
    binary = binary.upcase
    binary_separated = binary.split(//)
    next_first_letter = binary_separated[0].succ
    second_letter = binary_separated[1]

    return false unless next_first_letter == second_letter
  end

  true
end

letters = ['ab', 'BC', 'Cd', 'Ef']
consecutive_alphabet?(letters)