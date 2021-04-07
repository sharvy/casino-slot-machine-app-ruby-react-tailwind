require "rails_helper"

RSpec.describe "Games", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/game/index"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /roll" do
    it "returns http success" do
      get "/roll"
      expect(response).to have_http_status(:success)
    end

    it "returns current credit and result array" do
      get "/roll"

      parsed_json = JSON.parse(response.body)
      
      expect(parsed_json["credit"]).to be_a_kind_of(Integer)
      expect(parsed_json["result"]).to be_a_kind_of(Array)
    end
  end
end
