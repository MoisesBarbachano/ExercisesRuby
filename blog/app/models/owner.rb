class Owner
  include Mongoid::Document

  has_many :homes
  belongs_to :user

  field :curp, type: String
  field :registered_in_srpago, type: boolean

  validates_presence_of :curp, :registered_in_srpago
  validates :curp, length: {is: 18}

end
