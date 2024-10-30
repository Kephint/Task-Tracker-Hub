import { useState } from 'react'

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [dateInput, setDateInput] = useState('')
  const [formattedDate, setFormattedDate] = useState('')
  const [reminder, setReminder] = useState(false)

  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('id-ID', options);
  }

  const handleDateChange = (e) => {
    const inputDate = e.target.value;
    setDateInput(inputDate);
    if (inputDate) {
      setFormattedDate(formatDate(inputDate));
    } else {
      setFormattedDate('');
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert('Please add a task')
      return
    }

    onAdd({ text, day: formattedDate, reminder })

    setText('')
    setDateInput('')
    setFormattedDate('')
    setReminder(false)
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Task</label>
        <input
          type='text'
          placeholder='Add Task'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Day & Time</label>
        <input
          type='date'
          value={dateInput}
          onChange={handleDateChange}
        />
        {formattedDate && <p className="formatted-date">{formattedDate}</p>}
      </div>
      <div className='form-control form-control-check'>
        <label>
          <input
            type='checkbox'
            checked={reminder}
            value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
          />
          Set Reminder
        </label>
      </div>

      <input type='submit' value='Save Task' className='btn btn-block' />
    </form>
  )
}

export default AddTask
