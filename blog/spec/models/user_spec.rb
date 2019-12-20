require 'rails_helper'

RSpec.describe User, type: :model do
  let!(:user) { create(:user) }

  context 'when valid' do
    it { is_expected.to be_mongoid_document }

    it { expect(user).to be_valid }

    it 'when save is successful' do
      saved_user = user.save
      expect(saved_user).to eq(true)
    end
  end

  context 'when not valid' do
    it 'when name is nil' do
      user.name = nil
      expect(user).to_not be_valid
    end

    it 'when last name is nil' do
      user.last_name = nil
      expect(user).to_not be_valid
    end

    it 'when email is nil' do
      user.email = nil
      expect(user).to_not be_valid
    end

    it 'when mobile phone is nil' do
      user.mobile_phone = nil
      expect(user).to_not be_valid
    end

    it 'when work place is nil' do
      user.work_place = nil
      expect(user).to_not be_valid
    end

    it 'when save is not successful' do
      saved_user = user.save
      expect(saved_user).to eq(false)
    end
  end



  describe "Validations" do
    it "when phone is valid" do
      expect(user).to match( /\d[0-9]\)*\z/)
    end

    it "when phone is invalid" do
      user.mobile_phone = FFaker::Name.first_name
      expect(user).to_not be_valid
    end

    it "when email is unique" do
      should validate_uniqueness_of(:email)
    end
  end

  describe "Associations" do
    it 'Has many rents' do
      should have_many(:rents)
    end
  end

end
