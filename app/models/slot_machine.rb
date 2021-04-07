class SlotMachine
  attr_reader :credit, :game_symbols, :re_roll_chance

  def initialize(credit:, game_symbols:, re_roll_chance:)
    @credit = credit
    @game_symbols = game_symbols
    @re_roll_chance = re_roll_chance
  end

  def pull
    result = get_random_symbols

    if is_jackpot(result) && should_re_roll?
      result = get_random_symbols
    end

    result
  end

  private

  def is_jackpot(array)
    array.uniq.size == 1
  end

  def should_re_roll?
    rand <= re_roll_chance / 100.0
  end

  def get_random_symbols
    ([1, 2, 3]).map { game_symbols.shuffle[0, 1].join }
  end
end
