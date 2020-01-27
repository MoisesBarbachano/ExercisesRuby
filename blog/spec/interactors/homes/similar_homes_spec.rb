require 'rails_helper'

RSpec.describe Homes::SimilarHomes do
  let!(:owner) { FactoryBot.create(:owner) }
  let!(:home1) do
    Home.create(
      owner: owner,
      _status: 'published',
      price: 100,
      extra_service: 100,
      location: [100,100]
    )
  end
  let!(:home2) do
    Home.create(
      owner: owner,
      _status: 'published',
      price: 100,
      extra_service: 100,
      location: [100,100]
    )
  end
  let!(:home3) { FactoryBot.create(:home) }

  context '.call' do
    it 'find similar homes' do
      homes_ids_ctx = ::Homes::SimilarHomes.call

      expect(homes_ids_ctx.success?).to eq(true)
      expect(homes_ids_ctx.similar_homes_ids).to eq([home1.id, home2.id])
    end
  end
end
