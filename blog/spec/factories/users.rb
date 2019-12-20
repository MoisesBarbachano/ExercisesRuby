FactoryBot.define do
  factory :user do
    name { FFaker::NameMX.first_name } 
    last_name { FFaker::NameMX.last_name }
    email { FFaker::Internet.unique.email }
    mobile_phone { FFaker::PhoneNumberMX.mobile_phone_number }
    work_place { FFaker::NameMX.first_name }
  end
end