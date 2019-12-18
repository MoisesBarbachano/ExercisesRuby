require 'rails_helper'

RSpec.describe ReportsController, type: :controller do
  describe 'GET #info' do
    it 'renders the page' do
      get :info
      expect(response).to have_http_status(:success)
      expect(response).to render_template("info")
    end
  end
end
