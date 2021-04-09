class GameSession
  class << self
    def start!(session, initial_credit)
      session[:credit] = initial_credit
      session
    end
    
    def find_or_start!(session, initial_credit)
      session[:credit] ||= initial_credit
      session
    end

    def started?(session)
      !!session[:credit]
    end

    def update_session!(session, jackpot_credit)
      session[:credit] = session[:credit] - SlotMachine::PER_ROLL_COST

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
