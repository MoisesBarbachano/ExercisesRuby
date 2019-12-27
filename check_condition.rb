def check_conditions(conditions, number_check)
  conditions.each do |number_condition, result_condition|
    return result_condition if number_check < number_condition
  end
  'Number not found in the conditions'
end

conditions = {
  0 => 'sin fico',
  10 => 'con poco fico',
  20 => 'con fico regular'
}

check_conditions(conditions, 12)
