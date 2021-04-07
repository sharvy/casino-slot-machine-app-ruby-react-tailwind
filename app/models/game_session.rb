require "securerandom"

class GameSession
  class << self
    def start!(session)
      session[:current_user_id] ||= SecureRandom.uuid
      session[:credit] ||= 10
      updated_session(session)
    end

    def add_credit(session, credit)
      session[:credit] = session[:credit] + credit
      updated_session(session)
    end

    def remove_credit(session, credit = 1)
      session[:credit] = session[:credit] - credit
      updated_session(session)
    end

    def stop!(session)
      session.delete(:current_user_id)
      session.delete(:credit)
      updated_session({})
    end

    def updated_session(session)
      {
        user_id: session[:current_user_id],
        credit: session[:credit],
      }
    end
  end
end
