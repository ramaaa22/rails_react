class Api::V1::QuestionsController < ApplicationController
  protect_from_forgery with: :null_session
  before_action :set_question, only: %i[update_counter]

  def index
    @questions = Question.all
    render json: @questions, status: :ok
  end

  def create
    pp params
    @question = Question.create(question_params)
    if @question.save
      render json: {data: @question, status: "success"}, status: :ok
    else
      render json: {data: @question.errors.full_messages, status: "failure"}, status: :unprocessable_entity
    end
  end

  def update_counter
    @question.increment!(params[:count_for])
    render json: @question, status: :ok
  end

  private

  def set_question
    @question = Question.find(params[:id])
  end

  def question_params
    params.require(:question).permit(:title, :tag_id)
  end
end
