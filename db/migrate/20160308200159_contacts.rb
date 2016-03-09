class Contacts < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
      t.string :photo
      t.string :first_name
      t.string :last_name
      t.string :company
      t.string :email
      t.string :phone

      t.timestamps
    end
  end
end
