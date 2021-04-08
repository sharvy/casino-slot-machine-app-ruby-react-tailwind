Rails.application.routes.draw do
  get "roll", to: "game#roll", as: :roll
  get "start", to: "game#start", as: :start
  get "cashout", to: "game#cashout", as: :cashout

  root "game#index"
end
