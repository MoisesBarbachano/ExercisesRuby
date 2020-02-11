class User
  include Mongoid::Document

  field :name, type: String
  field :last_name, type: String
  field :email, type: String
  field :mobile_phone, type: String
  field :work_place, type: String

  has_many :rents
  
  validates_presence_of :email, :name, :last_name, :mobile_phone, :work_place
  validates :mobile_phone, format: { with: /\d[0-9]\)*\z/ }
  validates :email, uniqueness: true
end