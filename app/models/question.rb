class Question < ApplicationRecord
  belongs_to :tag

  validates :title, presence: true, uniqueness: true
  validates :tag_id, presence: true
end
