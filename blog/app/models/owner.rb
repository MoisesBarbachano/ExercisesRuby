class Owner
  include Mongoid::Document

  has_many :homes
  belongs_to :user

  field :curp, type: String
  field :registered_in_srpago, type: boolean
end
