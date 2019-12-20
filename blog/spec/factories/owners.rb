FactoryBot.define do
  factory :owner do
    curp { FFaker::IdentificationMX.curp }
    registered_in_srpago { FFaker::Boolean.random }
  end
end