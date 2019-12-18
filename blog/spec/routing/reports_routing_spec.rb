require "rails_helper"

describe "Routing" do
  it "Route to #info" do
    expect(get: "reports/info").to route_to("reports#info")
  end
end