class GameSession
  class << self
    def find_or_start!(session)
      session[:credit] ||= SlotMachine::INITIAL_CREDIT
      session
    end

    def start!(session)
      session[:credit] = SlotMachine::INITIAL_CREDIT
      session
    end

    def started?(session)
      session[:credit]
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
