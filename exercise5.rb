def update_info(data, key, value)
  data[key] = value
  data
end
  
data = {
  enterprise: 'Homie',
  years: 4
}

update_info(data, :years, 5)