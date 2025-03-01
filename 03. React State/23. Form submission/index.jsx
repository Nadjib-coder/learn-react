import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  function handleSubmit(event) {
    event.preventDefault();
    const formEl = event.currentTarget;
    const formData = new FormData(formEl);
    const email = formData.get('email');
    const password = formData.get('password');
    // console.log(email, password);
    // instead of console login it -> Gather the info from the form
    // send it to the backend (which is an AI in our case)
    formEl.reset();
  }

  return (
    <section>
      <h1>Signup form</h1>
      <form onSubmit={handleSubmit} method="POST">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="joe@schmoe.com"
        />
        <br />

        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password" />
        <br />

        <button>Submit</button>
      </form>
    </section>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
