class GameController < ApplicationController
  before_action :set_game_session, except: [:index]

  def index
    @game_session = {}
    set_game_session if GameSession.started?(session)
  end

  def start
    render_credit
  end

  def roll
    result = slot_machine.roll
    @game_session = GameSession.update_session!(@game_session, slot_machine.jackpot_credit)

    render json: { credit: @game_session[:credit], result: result }
  rescue SlotMachine::NotEnoughCreditError
    render json: { error: "Not Enough Credit To Roll!" }, status: :forbidden
  end

  def cashout
    render_credit
  end

  private

  def render_credit
    render json: { credit: @game_session[:credit] }
  end

  def slot_machine
    @slot_machine ||= SlotMachine.new(
      credit: @game_session[:credit],
      game_symbols: GameSymbol.all,
    )
  end

  def set_game_session
    @game_session = GameSession.start!(session)
  end

  def destroy_game_session
    @game_session = GameSession.stop!(session)
  end
end
