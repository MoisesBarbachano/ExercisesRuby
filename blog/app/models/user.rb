class User
  include Mongoid::Document
  validates :email, uniqueness: true, acceptance: { message: 'Ya repetiste este email' }
  validates :mobile_phone, numericality: true
  field :email, type: String
  field :name, type: String
  field :last_name, type: String
  field :mobile_phone, type: String
end
