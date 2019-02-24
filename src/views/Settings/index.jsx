import React from 'react';
import './styles.scss';
import Billing from './components/Billing';

class Settings extends React.Component {
    constructor(props) {
        super(props);
    }

  render() {
      return (
        <div className=".settings">
            <h1>Settings</h1>
            <Billing />
        </div>
      );
  }
}
export default Settings