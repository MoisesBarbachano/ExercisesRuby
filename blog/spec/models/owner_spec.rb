require 'rails_helper'

RSpec.describe Owner, type: :model do
  let!(:owner) { create(:owner) }

  context 'when valid' do
    it { is_expected.to be_mongoid_document }

    it { expect(owner).to be_valid }

    it 'when save is successful' do
      saved_owner = owner.save
      expect(saved_owner).to eq(true)
    end
  end

  context 'when not valid' do
    it 'when curp is nil' do
      owner.curp = nil
      expect(owner).to_not be_valid
    end

    it 'when registered in srpago is nil' do
      owner.registered_in_srpago = nil
      expect(owner).to_not be_valid
    end

    it 'when save is not successful' do
      saved_owner = owner.save
      expect(saved_owner).to eq(false)
    end
  end

  describe "Validations" do
    it "when CURP is 18 of length" do
      should ensure_length_of(owner.curp).is_equal_to(18)
    end

    it "when CURP is greather or less of 18 of length" do
      owner.curp = FFaker::IdentificationMX.rfc
      expect(owner.curp.length).to_not equal(18)
    end
  end

  describe "Associations" do
    it 'Has many homes' do
      should have_many(:homes)
    end

    it "Belong to user" do
      should belong_to(:user)
    end
  end
end
