require 'rails_helper'

RSpec.describe User, type: :model do
  let!(:user) { create(:user) }

  it { is_expected.to be_mongoid_document }

  it "is valid with valid attributes" do
    expect(user).to be_valid
  end

  it "is not valid with invalid attributes" do
    user.name = nil
    expect(user).to_not be_valid
  end

  describe "Validations" do
    it "is valid with a mobile phone of Mexico" do
      user.mobile_phone = FFaker::PhoneNumberID.international_mobile_phone_number
      expect(user).to be_valid
    end

    it "is invalid with an invalid mobile phone" do
      user.mobile_phone = FFaker::Name.first_name
      expect(user).to_not be_valid
    end
  end

  describe "Associations" do
    it { should have_many(:rents) }
  end

end
