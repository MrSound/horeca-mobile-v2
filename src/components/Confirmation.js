import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { confirmable } from 'react-confirm';
import PropTypes from 'prop-types';
import React from 'react';

class Confirmation extends React.Component {
    render() {
        const {
            okLabbel = 'OK',
            cancelLabel = 'Cancel',
            title,
            confirmation,
            show,
            proceed,
            dismiss,
            cancel,
            enableEscape = true,
          } = this.props;
        return (
            <div
                style={{ height: '100vh' }}
            >
                <Modal
                    isOpen={show}
                    // toggle={this.toggle}
                    // className={this.props.className}
                    // backdrop="static"
                    //onHide={dismiss}
                    backdrop={enableEscape ? true : 'static'}
                    keyboard={enableEscape}
                >
                    {/* <ModalHeader toggle={this.toggle}>{title}</ModalHeader> */}
                    <ModalHeader>{title}</ModalHeader>
                    <ModalBody>
                        {confirmation}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={proceed}>{okLabbel}</Button>{' '}
                        <Button color="secondary" onClick={cancel}>{cancelLabel}</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

Confirmation.propTypes = {
    okLabbel: PropTypes.string,
    cancelLabel: PropTypes.string,
    title: PropTypes.string,
    confirmation: PropTypes.string,
    show: PropTypes.bool,
    proceed: PropTypes.func,     // called when ok button is clicked.
    cancel: PropTypes.func,      // called when cancel button is clicked.
    dismiss: PropTypes.func,     // called when backdrop is clicked or escaped.
    enableEscape: PropTypes.bool,
}

export default confirmable(Confirmation);