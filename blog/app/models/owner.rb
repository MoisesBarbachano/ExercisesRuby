class Owner
  include Mongoid::Document

  field :curp, type: String
  field :registered_in_srpago, type: Boolean

  validates_presence_of :curp, :registered_in_srpago
  validates :curp, length: {is: 18}

  has_many :homes
  belongs_to :user
end
