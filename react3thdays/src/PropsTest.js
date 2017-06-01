import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PropsTest extends Component {
    static defaultProps={
        job:"개발자"
    }
    static propTypes={
        TestProps: PropTypes.string,
        job: PropTypes.string,
        mesg2: PropTypes.number
    }

    render() {
        const {TestProps,job}= this.props;

        return (
            
            <div>
                {TestProps} 직업은 {job}<br/>
                {this.props.children}<br/>
                {this.props.mesg2}
                <br/>

            </div>
        );
    }
}

export default PropsTest;