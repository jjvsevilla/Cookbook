import React from 'react';
import materializecss from 'materialize-css';

class MaterializeClassSelectInput extends React.Component {

  componentDidMount() {
    console.log('exampleComponent mounted');
    $(document).ready(function() {
      $('select').material_select();
    });
  }

  render() {
    return (
    <div className="input-field col s12">
      <select
        name={this.props.name}
        value={this.props.value}
        onChange={this.props.onChange}>
        <option value="" disabled>{this.props.defaultOption}</option>
        {this.props.options.map((option) => {
          return <option key={option.value} value={option.value}>{option.text}</option>;
        })
        }
      </select>
      <label>Materialize Select</label>
      {this.props.error && <div className="alert alert-danger">{this.props.error}</div>}
    </div>
    );
  }
}

export default MaterializeClassSelectInput;