import React from 'react';
import ReactDOM from 'react-dom';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: 'swordfish',
      authorized: false
    };
    this.authorize = this.authorize.bind(this);
  }

  authorize(e) {
    const password = e.target.querySelector(
      'input[type="password"]').value;
    const auth = password == this.state.password;
    this.setState({
      authorized: auth
    });
  }

  render() {

    const login = (
      <form
      action='#'
      onSubmit={this.authorize}> {/* calling authorize function above*/}
        <input
        type='password'
        placeholder='Password' />
        <input
        type='submit'/>
      </form>
    );
    // JSX login form with multiple children

    const contactInfo = (
       <ul>
          <li>
            client@example.com
          </li>
          <li>
            555.555.5555
          </li>
        </ul>
    );
    // making an info list to show only if the user has beeen authorized

    return (
      <div id="authorization">
        <h1>{this.state.authorized ? 'Contact' : 'Enter the password'}</h1>
        {/* making the display 'Contact' only if this state is true*/}
        {this.state.authorized ? contactInfo : login}
        {/* making a toggle user login */}
      </div>
    );
  }
}

ReactDOM.render(
  <Contact />,
  document.getElementById('app')
);
