import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux';

const withErrorHandler = (WrappedComponent, axios) => {

    return class extends Component {
        state = {
            error: null
        };

        // constructor(props){
        //     super(props);
        //     axios.interceptors.request.use(req => {
        //         this.setState({ error: null });
        //         return req;
        //     });
        //     axios.interceptors.response.use(res => res, error => {
        //         this.setState({ error: error });
        //     });
        // }

        componentWillMount() {
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({ error: null });
                return req;
            });
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({ error: error });
            });
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        errorDismissHandler = () => {
            this.setState({ error: null });
        }

        render() {
            return (
                <Aux>
                    <Modal
                        show={this.state.error}
                        modalClosed={this.errorDismissHandler}
                    >Something Went wrong!</Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    }
};

export default withErrorHandler;