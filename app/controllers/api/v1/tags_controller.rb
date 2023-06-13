class Api::V1::TagsController < ApplicationController
  protect_from_forgery with: :null_session
  def index
    @tags = Tag.all
    render json: @tags, status: :ok
  end
end
