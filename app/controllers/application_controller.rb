require "securerandom"

class ApplicationController < ActionController::Base 
  def current_user
    session[:current_user_id] ||= SecureRandom.uuid
    session[:credit] ||= 10

    {
      user_id: session[:current_user_id],
      credit: session[:credit],
    }
  end
  helper_method :current_user
end
