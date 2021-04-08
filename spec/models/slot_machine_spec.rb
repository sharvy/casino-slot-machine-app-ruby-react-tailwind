require "rails_helper"

RSpec.describe SlotMachine do
  let(:credit) { 10 }
  let(:valid_symbols) { GameSymbol.all }
  let(:slot_machine) {
    SlotMachine.new(
      credit: credit,
      game_symbols: valid_symbols,
    )
  }

  it "has constants INITIAL_CREDIT and PER_ROLL_COST" do
    expect(SlotMachine::INITIAL_CREDIT).not_to be_nil
    expect(SlotMachine::PER_ROLL_COST).not_to be_nil
  end

  describe "#roll" do
    before(:each) do
      @response = slot_machine.roll
    end

    it "returns 3 random symbols" do
      expect(@response.length).to eq(3)
    end

    it "returns valid symbols" do
      is_valid_array = @response.all? { |element| valid_symbols.include? element }
      expect(is_valid_array).to be true
    end
  end

  describe "#jackpot_credit" do
    it "checks result and returns jackpot value" do
      symbol = valid_symbols[0]
      expected_value = GameSymbol.new(symbol).value

      allow(slot_machine).to receive(:result).and_return([symbol, symbol, symbol])
      expect(slot_machine.jackpot_credit).to eq(expected_value)
    end
  end
end
