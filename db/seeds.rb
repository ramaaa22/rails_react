ruby = Tag.create(name: "Ruby")
js = Tag.create(name: "Javascript")

Question.create([
  {
    title: "First question",
    tag: ruby
  },
  {
    title: "Second question",
    tag: ruby
  },
  {
    title: "Third question",
    tag: ruby
  },
  {
    title: "Fourth question",
    tag: js
  },
  {
    title: "Fifth question",
    tag: js
  }
])
