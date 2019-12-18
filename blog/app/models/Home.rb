class Home
  include Mongoid::Document
  field :price, type: String
  field :extra_service, type: String
  field :total_amount, type: String
  field :home_features, type: Hash, default: {garden: false, furnished: false, gym: false}
end
