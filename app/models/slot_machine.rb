class SlotMachine
  class NotEnoughCreditError < StandardError; end

  INITIAL_CREDIT = 10
  PER_ROLL_COST = 1

  attr_reader :credit, :game_symbols, :result

  def initialize(credit:, game_symbols:)
    @credit = credit
    @game_symbols = game_symbols
    @result = []
  end

  def roll
    raise NotEnoughCreditError if credit < PER_ROLL_COST

    result = get_random_symbols

    if is_jackpot? && should_re_roll?
      result = get_random_symbols
    end

    result
  end

  def jackpot_credit
    return 0 unless is_jackpot?
    GameSymbol.new(result.first).value
  end

  private

  def re_roll_chance
    return 30 if credit >= 40 && credit <= 60
    return 60 if credit > 60

    return 0
  end

  def is_jackpot?
    result.uniq.size == 1
  end

  def should_re_roll?
    rand <= re_roll_chance / 100.0
  end

  def get_random_symbols
    ([1, 2, 3]).map { game_symbols.shuffle[0, 1].join }
  end
end
