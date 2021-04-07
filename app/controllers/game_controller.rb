class GameController < ApplicationController
  before_action :set_game_session

  def index
  end

  def roll
    result = slot_machine.roll
    @game_session = GameSession.update_session!(@game_session, slot_machine.jackpot_credit)

    render json: { credit: @game_session[:credit], result: result }
  end

  private

  def slot_machine
    @slot_machine ||= SlotMachine.new(
      credit: @game_session[:credit],
      game_symbols: GameSymbol.all,
      re_roll_chance: GameDefaults.re_roll_chance(@game_session[:credit]),
    )
  end

  def set_game_session
    @game_session = GameSession.start!(session)
  end
end
