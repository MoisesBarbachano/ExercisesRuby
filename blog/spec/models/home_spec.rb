require 'rails_helper'

RSpec.describe Home, type: :model do
  let!(:home) { create(:home)}

  context "when valid" do
    it { is_expected.to be_mongoid_document }

    it { expect(home).to be_valid }

    it 'when save is successful' do
      saved_home = home.save

      expect(saved_home).to eq(true)
    end
  end

  context "when not valid" do
    it 'when price is nil' do
      home.price = nil

      expect(home).to_not be_valid
    end

    it 'when extra service is nil' do
      home.extra_service = nil

      expect(home).to_not be_valid
    end

    it 'when total amount is nil' do
      home.total_amount = nil

      expect(home).to_not be_valid
    end

    it 'when save is not successful' do
      home.price = nil
      saved_home = home.save

      expect(saved_home).to eq(false)
    end
  end

  context "Validations" do
    it { should validate_presence_of :price }
    it { should validate_presence_of :extra_service }
    it { should validate_presence_of :total_amount }

    it "when price not valid" do
      home.price = FFaker::Name.first_name

      expect(home).to_not be_valid
    end

    it "when extra_service not valid" do
      home.extra_service = FFaker::Name.first_name

      expect(home).to_not be_valid
    end

    it "when total_amount not valid" do
      home.total_amount = FFaker::Name.first_name
      
      expect(home).to_not be_valid
    end
  end

  context "Associations" do
    it 'Has many rents' do
      should have_many(:rents)
    end

    it "Belong to user" do
      should belong_to(:owner)
    end
  end
end
