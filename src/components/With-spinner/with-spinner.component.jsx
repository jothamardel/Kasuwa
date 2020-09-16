import React from 'react';
import { connect } from 'react-redux';


import './with-spinner.styles.scss';


const WithSpinner = ({ modal: { isLoading } }) => (
  <div className={`spinnerOverlay cover-spin ${isLoading ? 'spinner' : ''}`}>
    {/* <div class="loader"></div>  */}
    <div className='spinner-container'>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  modal: state.modal
});

export default connect(mapStateToProps)(WithSpinner);