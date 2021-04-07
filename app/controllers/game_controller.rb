class GameController < ApplicationController
  def index
    @game_session = GameSession.start!(session)
  end
end
