class Car
  def initialize(brand, color, year)
    @started = false
    @trip_state = :not_started
    @brand = brand
    @color = color
    @year = year
  end

  def start
    raise 'Car already started' if @started

    @started = true

    'Car started'
  end

  def start_trip
    raise 'Car is not started' unless @started
    raise 'Trip is already started' if @trip_state == :started

    @trip_state = :started

    'The trip has begun'
  end

  def finish_trip
    raise 'Car is not started' unless @started
    raise 'Trip is not started' if @trip_state == :not_started

    @trip_state = :not_started

    'The trip has finished'
  end
end

car = Car.new('Ford', 'red', 2019)
puts car.start
puts car.start_trip
puts car.finish_trip
