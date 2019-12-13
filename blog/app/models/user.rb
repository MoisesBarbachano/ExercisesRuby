class User
  include Mongoid::Document
  validates :mobile_phone, numericality: true
  field :email, type: String
  field :name, type: String
  field :last_name, type: String
  field :mobile_phone, type: String
  field :work_place, type: String
end
