import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button primary onClick={handleClose}>
        I Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Please accept the terms and conditions.</p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac neque
        ultricies, tempor quam mollis, viverra magna. Aliquam sit amet nulla sed
        lectus ultricies aliquam. Fusce pretium tempus turpis vel auctor. Nunc
        vel consectetur lorem. Cras eu lorem venenatis, elementum erat sit amet,
        vestibulum magna. Nulla facilisis in leo non dapibus. Aenean ultricies
        laoreet ullamcorper. Ut in sapien id mi elementum sollicitudin ac et
        nulla. Proin scelerisque in ligula eu scelerisque. Nulla elementum erat
        vel pulvinar placerat. Integer eget tincidunt ipsum. Vestibulum a
        tincidunt eros. Morbi erat magna, dictum eget ultrices a, maximus ut
        dui. Suspendisse potenti. Aenean lobortis auctor viverra.{' '}
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac neque
        ultricies, tempor quam mollis, viverra magna. Aliquam sit amet nulla sed
        lectus ultricies aliquam. Fusce pretium tempus turpis vel auctor. Nunc
        vel consectetur lorem. Cras eu lorem venenatis, elementum erat sit amet,
        vestibulum magna. Nulla facilisis in leo non dapibus. Aenean ultricies
        laoreet ullamcorper. Ut in sapien id mi elementum sollicitudin ac et
        nulla. Proin scelerisque in ligula eu scelerisque. Nulla elementum erat
        vel pulvinar placerat. Integer eget tincidunt ipsum. Vestibulum a
        tincidunt eros. Morbi erat magna, dictum eget ultrices a, maximus ut
        dui. Suspendisse potenti. Aenean lobortis auctor viverra.{' '}
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac neque
        ultricies, tempor quam mollis, viverra magna. Aliquam sit amet nulla sed
        lectus ultricies aliquam. Fusce pretium tempus turpis vel auctor. Nunc
        vel consectetur lorem. Cras eu lorem venenatis, elementum erat sit amet,
        vestibulum magna. Nulla facilisis in leo non dapibus. Aenean ultricies
        laoreet ullamcorper. Ut in sapien id mi elementum sollicitudin ac et
        nulla. Proin scelerisque in ligula eu scelerisque. Nulla elementum erat
        vel pulvinar placerat. Integer eget tincidunt ipsum. Vestibulum a
        tincidunt eros. Morbi erat magna, dictum eget ultrices a, maximus ut
        dui. Suspendisse potenti. Aenean lobortis auctor viverra.{' '}
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac neque
        ultricies, tempor quam mollis, viverra magna. Aliquam sit amet nulla sed
        lectus ultricies aliquam. Fusce pretium tempus turpis vel auctor. Nunc
        vel consectetur lorem. Cras eu lorem venenatis, elementum erat sit amet,
        vestibulum magna. Nulla facilisis in leo non dapibus. Aenean ultricies
        laoreet ullamcorper. Ut in sapien id mi elementum sollicitudin ac et
        nulla. Proin scelerisque in ligula eu scelerisque. Nulla elementum erat
        vel pulvinar placerat. Integer eget tincidunt ipsum. Vestibulum a
        tincidunt eros. Morbi erat magna, dictum eget ultrices a, maximus ut
        dui. Suspendisse potenti. Aenean lobortis auctor viverra.{' '}
      </p>
    </div>
  );
}

export default ModalPage;
