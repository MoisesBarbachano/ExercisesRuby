class Home
  include Mongoid::Document

  validates :home_features[:garden], inclusion: { in: [true, false] }
  validates :home_features[:furnished], inclusion: { in: [true, false] }
  validates :home_features[:gym], inclusion: { in: [true, false] }

  has_many :rents
  belongs_to :owner

  field :price, type: Float
  field :extra_service, type: Float
  field :total_amount, type: Float
  field :home_features, type: Hash, default: {garden: false, furnished: false, gym: false}
end
