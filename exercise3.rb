require 'date'

IS_HIGHER_MONTH = 1

def month_by_month(init_date, end_date, day)
  dates = []
  current_date = Date.new(init_date.year, init_date.mon, day)

  while((current_date <=> end_date) != IS_HIGHER_MONTH)
    dates << current_date.strftime("%e/%B/%Y")
    current_date = current_date.next_month
  end

  dates
end

month_by_month(Date.new(2018,1,2), Date.new(2018,5,5), 4) 