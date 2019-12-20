require 'rails_helper'

RSpec.describe UsersController, type: :controller do
  let!(:user) { create(:user) }
  let(:user_unsaved) { build(:user) }

  describe "GET #index" do
    it "returns a status 200" do
      get :index, params: {}

      expect(response.status).to eq(200)
    end
  end

  describe "GET #show" do
    it "returns a status 200" do
      get :show, params: {id: user.to_param}

      expect(response.status).to eq(200)
    end
  end

  describe "GET #new" do
    it "returns a status 200" do
      get :new, params: {}

      expect(response.status).to eq(200)
    end
  end

  describe "GET #edit" do
    it "returns a status 200" do
      get :edit, params: {id: user.to_param}

      expect(response.status).to eq(200)
    end
  end

  describe "POST #create" do
    context "with valid params" do
      it "creates a new User" do
        expect {
          post :create, params: {user: user_unsaved.attributes}
        }.to change(User, :count).by(1)
      end

      it "redirects to the created user" do
        post :create, params: {user: user_unsaved.attributes}

        expect(response).to redirect_to(User.last)
      end
    end

    context "with invalid params" do
      it "returns a status 200 (i.e. to display the 'new' template)" do
        user.name = nil
        post :create, params: {user: user.attributes}

        expect(response.status).to eq(200)
      end
    end
  end

  describe "PUT #update" do
    context "with valid params" do
      it "updates the requested user" do
        user.name = user.name + user.name
        put :update, params: {id: user.to_param, user: user.attributes}
        user.reload

        expect(response.status).to eq(302)
      end

      it "redirects to the user" do
        put :update, params: {id: user.to_param, user: user.attributes}

        expect(response).to redirect_to(user)
      end
    end

    context "with invalid params" do
      it "returns a status 200 to edit params" do
        user.name = nil
        put :update, params: {id: user.to_param, user: user.attributes}

        expect(response.status).to eq(200)
      end
    end
  end

  describe "DELETE #destroy" do
    it "destroys the requested user" do
      expect {
        delete :destroy, params: {id: user.to_param}
      }.to change(User, :count).by(-1)
    end

    it "redirects to the users list" do
      delete :destroy, params: {id: user.to_param}

      expect(response).to redirect_to(users_url)
    end
  end
end
