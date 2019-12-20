class Home
  include Mongoid::Document

  field :price, type: Float
  field :extra_service, type: Float
  field :total_amount, type: Float
  field :home_features, type: Hash, default: {garden: false, furnished: false, gym: false}

  validates_presence_of :price, :extra_service, :total_amount
  validates :price, numericality: true
  validates :extra_service, numericality: true
  validates :total_amount, numericality: true

  has_many :rents
  belongs_to :owner
end
