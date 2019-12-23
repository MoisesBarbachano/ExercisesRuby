namespace :generate_home do
  desc "Generate two homes"
  task generate_two: :environment do
    user = User.find_or_create_by!(
      name: "Moises",
      last_name: "Chiu",
      email: "a1@gmail.com",
      mobile_phone: "9991058361",
      work_place: "Homie"
    )
    owner = Owner.find_or_create_by!(
      user: user,
      curp: "1234567891234567SS",
      registered_in_srpago: true
    )

    Home.find_or_create_by!(
      owner: owner,
      price: 2100.29,
      extra_service: 900.10,
      home_features: {
        garden: true,
        furnished: false,
        gym: true
      },
      _status: :published
    )

    Home.find_or_create_by!(
      owner: owner,
      price: 182.90,
      extra_service: 120.23,
      home_features: {
        garden: false,
        furnished: false,
        gym: true
      },
      _status: :rented
    )
  end
end
