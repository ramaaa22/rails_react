import React, { useEffect, useState } from "react"

const NewQuestion = ({ click }) => {
  const [tags, setTags] = useState([])

  const tagsUrl = "http://localhost:3000/api/v1/tags"
  const fetchTags = async () => {
    await fetch(tagsUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setTags(data)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  useEffect(() => {
    fetchTags()
  }, [])

  const [formField, setFormField] = useState({
    title: '',
    tag_id: ''
  })

  const handleQuestionSubmit = event => {
    event.preventDefault()
    createQuestion(formField)
  }

  const createQuestion = data => {
    fetch('http://localhost:3000/api/v1/questions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error))
    click()
  }

  const handleFormFields = event => {
    setFormField({ ...formField, [event.target.name]: event.target.value })
  }

  return (
    <>
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">New question</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form onSubmit={handleQuestionSubmit}>
              <div className="modal-body">
                <div className="form-group">
                  <label className="form-label mt-3 mb-3">Tag</label>
                  <select class="form-select" aria-label="Default select example" onChange={event => handleFormFields(event)} name="tag_id">
                    {tags.map((tag) =>
                      <option key={tag.id} value={tag.id}>{tag.name}  </option>
                    )}
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label mt-3 mb-3">Title</label>
                  <input type="text" className="form-control form-control-lg rounded-0" onChange={event => handleFormFields(event)} name="title" />
                </div>

              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-primary">Save changes</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewQuestion