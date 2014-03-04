SarahWebsite::Application.routes.draw do
  resources :contents, only: [:index] do
    post 'send_message', on: :collection
  end

  root to: 'contents#index'
end
