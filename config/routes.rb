Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :artists, only: [:index, :show] do
      get 'followed_artists', on: :collection
      get 'featured_artists', on: :collection
      post 'follow', on: :collection
      delete 'unfollow', on: :collection
    end 
    resources :playlists do
      get 'followed_playlists', on: :collection
      get 'featured_playlists', on: :collection
      get 'charts_playlists', on: :collection
      get 'genres_playlists', on: :collection
      post 'follow', on: :collection
      delete 'unfollow', on: :collection
    end 
    resources :playlist_tracks, only: [:show, :create, :destroy]
    resources :albums, only: [:index, :show] do
      get 'followed_albums', on: :collection
      get 'featured_albums', on: :collection
      post 'follow', on: :collection
      delete 'unfollow', on: :collection
    end 
    resources :tracks, only: [:index] do
      get 'search', on: :collection
      get 'followed_tracks', on: :collection
      post 'follow', on: :collection
      delete 'unfollow', on: :collection
    end 
  end

  root to: 'static_pages#root'
end
