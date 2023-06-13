class CreateQuestion2s < ActiveRecord::Migration[7.0]
  def change
    create_table :question2s do |t|
      t.string :title
      t.references :tag, null: false, foreign_key: true

      t.timestamps
    end
  end
end
