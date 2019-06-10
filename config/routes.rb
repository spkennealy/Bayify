Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :artists, only: [:index, :show] do
      get 'search', on: :collection
    end 
    resources :playlists do
      get 'search', on: :collection
    end 
    resources :playlist_tracks, only: [:show, :create, :destroy]
    resources :albums, only: [:index, :show] do
      get 'search', on: :collection
    end 
    resources :tracks, only: [:index] do
      get 'search', on: :collection
    end 
  end

  root to: 'static_pages#root'
end
