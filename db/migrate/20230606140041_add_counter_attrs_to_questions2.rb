class AddCounterAttrsToQuestions2 < ActiveRecord::Migration[7.0]
  def change
    add_column :question2s, :likes_count, :integer, default: 0
    add_column :question2s, :dislikes_count, :integer, default: 0
  end
end
