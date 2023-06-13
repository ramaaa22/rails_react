class DropQuestion2Table < ActiveRecord::Migration[7.0]
  def up
    drop_table :question2s
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
