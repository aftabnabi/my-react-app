import React from 'react';

//create preference component
export default class Preferences extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      preferences: {
        language: this.props.language,
        currency: this.props.currency
      }
    };
  }

  //get the preferences
  getPreferences() {
    return this.state.preferences;
  }

  //update the preferences
  updatePreferences(preferences) {
    this.setState({ preferences: preferences });
  }

  //render the component
  render() {
    return (
      <div>
        <h1>Preferences</h1>
        <div className="preferences-container">
          <div className="preferences-form">
            <label>
              Language:
              <select
                value={this.state.preferences.language}
                onChange={(event) => {
                  let preferences = this.state.preferences;
                  preferences.language = event.target.value;
                  this.setState({ preferences: preferences });
                }}
              >
                <option value="en">English</option>
                <option value="fr">Français</option>
                <option value="de">Deutsch</option>
                <option value="es">Espanol</option>
              </select>
            </label>
            <label>
              Currency:
              <select
                value={this.state.preferences.currency}
                onChange={(event) => {
                    let preferences = this.state.preferences;
                    preferences.currency = event.target.value;
                    this.setState({ preferences: preferences });
                    }
                }
                >
                    <option value="dollar">Dollar</option>
                    <option value="euro">Euro</option>
                </select>       
            </label>
            
            <button
              onClick={() => {
                this.props.updatePreferences(this.state.preferences);
              }}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }
  
}