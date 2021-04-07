require "rails_helper"

RSpec.describe GameDefaults do
  it "has constants INITIAL_CREDIT and PER_ROLL_COST" do
    expect(GameDefaults::INITIAL_CREDIT).not_to be_nil
    expect(GameDefaults::PER_ROLL_COST).not_to be_nil
  end

  describe ".re_roll_chance" do
    it "returns re roll chance based on credit" do
      expect(GameDefaults.re_roll_chance(40)).to eq(30)
    end
  end
end
