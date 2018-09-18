import React, { Component } from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import { connect } from "react-redux";
import { storeEndAddress } from "../../actions";
import PropTypes from "prop-types";

import "../Search/Search.css";

export class EndAddressInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      endAddress: ""
    };
  }

  handleChange = endAddress => {
    this.setState({ endAddress });
  };

  handleSelect = address => {
    this.props.storeEndAddress(address);
    this.setState({ endAddress: address });
  };

  deleteInput = event => {
    event.preventDefault();
    const { name } = event.target;
    this.setState({ [name]: "" });
  };

  render() {
    return (
      <PlacesAutocomplete
        name="endAddress"
        value={this.state.endAddress}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => {
          return (
            <div className='form'>
              <div className= 'input-container last-input-container'>
                <input
                  value={this.state.endAddress}
                  {...getInputProps({
                    placeholder: 'Search ending Point ...',
                    className: 'input'
                  })}
                />
                <button
                  className="delete-button"
                  name="endAddress"
                  onClick={this.deleteInput}
                />
              </div>
              <div className="autocomplete-dropdown-container" id='end-address'>
                {loading && <div>Loading...</div>}
                {suggestions.map((suggestion, index) => {
                  const className = suggestion.active
                    ? "suggestion-item--active"
                    : "suggestion-item";
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? { backgroundColor: "#fafafa", cursor: "pointer" }
                    : { backgroundColor: "#ffffff", cursor: "pointer" };
                  return (
                    <div
                      key={index}
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        }}
      </PlacesAutocomplete>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  storeEndAddress: endAddress => dispatch(storeEndAddress(endAddress))
});

export default connect(
  null,
  mapDispatchToProps
)(EndAddressInput);

EndAddressInput.propTypes = {
  storeEndAddress: PropTypes.func
};
