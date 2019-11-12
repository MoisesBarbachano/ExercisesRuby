require 'date'

IS_HIGHER_MONTH = 1

def month_by_month(init_date,end_date,day)
  dates = []
  actual_date = Date.new(init_date.year, init_date.mon, day)

  while((actual_date <=> end_date)!= IS_HIGHER_MONTH)
    dates << actual_date.strftime("%e/%B/%Y")
    actual_date = actual_date.next_month
  end

  dates
end


month_by_month(Date.new(2018,1,2),Date.new(2018,5,5),4) 