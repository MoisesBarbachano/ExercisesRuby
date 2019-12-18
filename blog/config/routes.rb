Rails.application.routes.draw do
  get 'reports/info'
  resources :users
end
