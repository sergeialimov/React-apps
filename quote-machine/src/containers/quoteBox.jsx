import QuoteBox from './../components/quoteBox.jsx';
import { submitNewNum } from './../actions/submitNewNum.js';
import { connect } from 'react-redux';

const mapStateToProps = (state=0) => {
  return {
    num: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNum: (num) => {
      dispatch(submitNewNum(num));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(QuoteBox);