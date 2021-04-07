class GameSession
  class << self
    def start!(session)
      session[:credit] ||= 10
      session
    end

    def update_session!(session, jackpot_credit)
      session[:credit] = session[:credit] - GameDefaults::PER_ROLL_COST

      if jackpot_credit
        session[:credit] = session[:credit] + jackpot_credit
      end

      session
    end

    def stop!(session)
      session.delete(:session_id)
      session.delete(:credit)
      session
    end
  end
end
