namespace :generate_home do
  desc "Generate two homes"
  task generate_homes: :environment do
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
      price: 2000.00,
      extra_service: 100.00,
      home_features: {
        garden: true,
        furnished: true,
        gym: true
      },
      _status: :published,
      location: [20.1, 30.2]
    )
    Home.find_or_create_by!(
      owner: owner,
      price: 2000.00,
      extra_service: 100.00,
      home_features: {
        garden: false,
        furnished: false,
        gym: false
      },
      _status: :published,
      location: [20.1, 30.2]
    )
    Home.find_or_create_by!(
      owner: owner,
      price: 2000.00,
      extra_service: 100.00,
      home_features: {
        garden: true,
        furnished: false,
        gym: true
      },
      _status: :published,
      location: [20.1, 30.2]
    )

    user_second = User.find_or_create_by!(
      name: "Marycielo",
      last_name: "Canul",
      email: "mar@gmail.com",
      mobile_phone: "9991058361",
      work_place: "Rehab"
    )
    owner_second = Owner.find_or_create_by!(
      user: user_second,
      curp: "1234567891234568SS",
      registered_in_srpago: true
    )

    Home.find_or_create_by!(
      owner: owner_second,
      price: 1000.00,
      extra_service: 100.00,
      home_features: {
        garden: true,
        furnished: false,
        gym: true
      },
      _status: :published,
      location: [10.1, 10.2]
    )

    user_third = User.find_or_create_by!(
      name: "Antonio",
      last_name: "Angel",
      email: "AA@gmail.com",
      mobile_phone: "9991058362",
      work_place: "HighS"
    )
    owner_third = Owner.find_or_create_by!(
      user: user_third,
      curp: "1234567891234562SS",
      registered_in_srpago: true
    )

    Home.find_or_create_by!(
      owner: owner_third,
      price: 100.00,
      extra_service: 103.00,
      home_features: {
        garden: true,
        furnished: false,
        gym: true
      },
      _status: :rented,
      location: [20.1, 40.2]
    )
    Home.find_or_create_by!(
      owner: owner_third,
      price: 100.00,
      extra_service: 100.00,
      home_features: {
        garden: false,
        furnished: false,
        gym: false
      },
      _status: :published,
      location: [20.1, 40.2]
    )
    Home.find_or_create_by!(
      owner: owner_third,
      price: 100.00,
      extra_service: 100.00,
      home_features: {
        garden: false,
        furnished: false,
        gym: true
      },
      _status: :published,
      location: [20.1, 40.2]
    )
    Home.find_or_create_by!(
      owner: owner_third,
      price: 100.00,
      extra_service: 100.00,
      home_features: {
        garden: false,
        furnished: false,
        gym: false
      },
      _status: :published,
      location: [22.1, 40.2]
    )
    Home.find_or_create_by!(
      owner: owner_third,
      price: 100.00,
      extra_service: 100.00,
      home_features: {
        garden: false,
        furnished: false,
        gym: true
      },
      _status: :published,
      location: [22.1, 40.2]
    )
  end
end
