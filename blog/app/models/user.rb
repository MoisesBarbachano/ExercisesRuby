class User
  include Mongoid::Document

  field :email, type: String
  field :name, type: String
  field :last_name, type: String
  field :mobile_phone, type: String
  field :work_place, type: String

  validates_presence_of :email, :name, :last_name, :mobile_phone, :work_place
  validates :mobile_phone, format: { with: /\d[0-9]\)*\z/ }
  validates :email, uniqueness: true

  has_many :rents
end
