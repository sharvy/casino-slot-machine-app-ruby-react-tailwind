class GameSymbol
  attr_reader :name

  SYMBOL_NAMES_AND_VALUES = {
    "C" => 10,
    "L" => 20,
    "O" => 30,
    "W" => 40,
  }

  def self.all
    SYMBOL_NAMES_AND_VALUES.keys
  end

  def initialize(name)
    @name = name
  end

  def value
    GameSymbol::SYMBOL_NAMES_AND_VALUES[name]
  end
end
