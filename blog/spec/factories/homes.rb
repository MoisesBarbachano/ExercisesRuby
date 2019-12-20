FactoryBot.define do
  factory :home do
    price { FFaker::String.from_regexp('[-+]?([0-9]*\.[0-9]+|[0-9]+)') }
    extra_service { FFaker::String.from_regexp('[-+]?([0-9]*\.[0-9]+|[0-9]+)') }
    total_amount { FFaker::String.from_regexp('[-+]?([0-9]*\.[0-9]+|[0-9]+)') }
    home_features do
      {garden: FFaker::Boolean.random,
       furnished: FFaker::Boolean.random,
       gym: FFaker::Boolean.random
      }
    end
  end
end