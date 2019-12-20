namespace :generate_home do
  desc "Generate two homes"
  task generate_two: :environment do
    user = User.create(
      name: "Moises",
      last_name: "Chiu",
      email: "a1@gmail.com",
      mobile_phone: "9991058361",
      work_place: "Homie"
    )
    owner = Owner.create(
      user: user,
      curp: "1234567891234567SS", 
      registered_in_srpago: true
    )
    
    Home.create(
      owner: owner,
      price: 2100.29,
      extra_service: 900.10,
      home_features: {
        garden: true,
        furnished: false,
        gym: true
      },
      status: :published
    )

    Home.create(
      owner: owner,
      price: 182.90,
      extra_service: 120.23,
      home_features: {
        garden: false,
        furnished: false,
        gym: true
      },
      status: :rented
    )
  end
end
