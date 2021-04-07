class GameSymbol
  attr_reader :name

  SYMBOL_NAMES_AND_VALUES = {
    "CHERRY" => 10,
    "LEMON" => 20,
    "ORANGE" => 30,
    "WATERMELON" => 40,
  }

  def initialize(name)
    @name = name
  end

  def value
    SYMBOL_NAME_AND_VALUES[name]
  end
end