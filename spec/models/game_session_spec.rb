require "rails_helper"

RSpec.describe GameSession, type: :model do
  describe ".start!" do
    it "freshly starts the game session" do
      game_session = described_class.start!({}, SlotMachine::INITIAL_CREDIT)
      expect(game_session[:credit]).to eq(SlotMachine::INITIAL_CREDIT)
    end
  end

  describe ".find_or_start!" do
    it "finds a game session, if not found creates one" do
      game_session = described_class.find_or_start!({ credit: 5 }, 10)
      expect(game_session[:credit]).to eq(5)
    end
  end

  describe ".started?" do
    it "returns true if a game is already running" do
      game_session = described_class.start!({}, SlotMachine::INITIAL_CREDIT)
      expect(described_class.started?(game_session)).to be true
    end

    it "returns false if a game is not already running" do
      expect(described_class.started?({})).to be false
    end
  end

  describe "update_session!" do
    it "deducts per roll cost from the game session credit" do
      game_session = described_class.start!({}, 10)
      updated_session = described_class.update_session!(game_session, 0)

      expect(updated_session[:credit]).to eq(9)
    end

    it "adds jackpot value to game session credit" do
      game_session = described_class.start!({}, 10)
      updated_session = described_class.update_session!(game_session, 10)

      expect(updated_session[:credit]).to eq(19)
    end
  end

  describe "stop!" do
    it "destroys running game session" do
      game_session = described_class.start!({}, 10)
      destroyed_game_session = described_class.stop!(game_session)
      expect(described_class.started?(destroyed_game_session)).to eq false
    end
  end
end
