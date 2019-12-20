require 'rails_helper'

RSpec.describe Rent, type: :model do

  context 'when valid' do
    it { is_expected.to be_mongoid_document }
  end

  describe "Associations" do
    it "Belong to user" do
      should belong_to(:user)
    end

    it "Belong to home" do
      should belong_to(:home)
    end
  end

end
