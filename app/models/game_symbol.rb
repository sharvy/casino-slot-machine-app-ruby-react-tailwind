class GameSymbol
  attr_reader :name

  SYMBOL_NAMES_AND_VALUES = {
    "CHERRY" => 10,
    "LEMON" => 20,
    "ORANGE" => 30,
    "WATERMELON" => 40,
  }

  def self.all
    SYMBOL_NAMES_AND_VALUES.keys
  end

  def initialize(name)
    @name = name
  end

  def value
    GameSymbol::SYMBOL_NAME_AND_VALUES[name]
  end
end
