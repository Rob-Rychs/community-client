import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import Form, {validate} from '../presentationals/Form.jsx';
import {submitStationForm} from '../../actions';


const mapStateToProps = (state) => ({
  formType: state.modals.modalProps.tab,
  initialValues: state.modals.modalProps.tab,
  form: state.form //populated by redux form
});

const mapDispatchToProps = (dispatch) => ({
  submitStationForm: (obj) => dispatch(submitStationForm(obj)),

});

const Comp = connect(mapStateToProps, mapDispatchToProps)(Form);

export default reduxForm({
  form: 'station-form',//unique form name or tag, for form related function like clearing or resetting form
  validate
})(Comp);
