import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends Component {

   componentDidMount() {
      this.props.fetchStream(this.props.match.params.id);
   }

   onSubmit = (formValues) => {
      this.props.editStream(this.props.match.params.id, formValues);
   }

   render() {
      return (
         <div>
            <h3>Edit The Stream</h3>
            <StreamForm 
               initialValues={ _.pick(this.props.stream, 'title', 'description') }
               onSubmit={this.onSubmit} 
            />
         </div>
      )
   }
}
const mapStateToProp = (state, ownProps) => {
   return {
      stream: state.streams[ownProps.match.params.id]
   };
}

export default connect(mapStateToProp, { fetchStream, editStream })(StreamEdit);  