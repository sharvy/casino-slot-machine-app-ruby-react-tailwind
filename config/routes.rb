Rails.application.routes.draw do
  get 'game/index'
  get 'roll', to: 'game#roll', as: :roll

  root 'game#index'
end
