Rails.application.routes.draw do
  get 'game/index'
  get 'session-details', to: 'game#session_details', as: :session_details

  root 'game#index'
end
