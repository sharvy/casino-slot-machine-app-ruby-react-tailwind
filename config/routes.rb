Rails.application.routes.draw do
  get 'game/index'
  get 'roll', to: 'game#roll'

  root 'game#index'
end
