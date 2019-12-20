class Home
  include Mongoid::Document

  field :price, type: Float
  field :extra_service, type: Float
  field :total_amount, type: Float
  field :home_features, type: Hash, default: { garden: false, furnished: false, gym: false }

  validates_presence_of :price, :extra_service, :total_amount
  validates :price, numericality: true
  validates :extra_service, numericality: true
  validates :total_amount, numericality: true
  validate :valid_total_amount?

  has_many :rents
  belongs_to :owner

  def valid_total_amount?
    price_formated = price.to_f
    service_formated = extra_service.to_f
    total_sum = price_formated + service_formated
    
    return errors.add(:base, 'total_amount must be price + extra_service') unless total_amount == total_sum
  end
end
