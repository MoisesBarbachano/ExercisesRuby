class SimilarHome
  PRICE_POSITION = 0
  LOCATION_POSITION = 1
  JUST_ONE = 1
  REPEATED_STATUS = 'published'

  def self.department_ids
    owners_id = Owner.pluck(:id)

    owners_id.each do |owner_id|
      owner_homes = Home.where(owner_id: owner_id, _status: REPEATED_STATUS, master_home_id: nil)
      homes_values = owner_homes.pluck(:total_amount, :location)
      next if homes_values.one?

      unique_values = homes_values.select { |home| homes_values.count(home) > JUST_ONE }.uniq
      unique_values.each do |same_values|
        homes_values(owner_id, same_values)
      end
    end
  end

  def self.homes_values(owner_id, same_values)
    homes_repeated = Home.where(
      owner_id: owner_id,
      _status: REPEATED_STATUS,
      total_amount: same_values[PRICE_POSITION],
      location: same_values[LOCATION_POSITION],
      master_home_id: nil
    )

    homes_repeated.each do |home|
      owner = home.owner
      owner_complete_name = "#{owner.user.name} #{owner.user.last_name}"
      puts "#{owner_complete_name},#{owner.user.email},#{home.id},#{home.total_amount},#{home.status},#{home.location}"
    end
  end
end