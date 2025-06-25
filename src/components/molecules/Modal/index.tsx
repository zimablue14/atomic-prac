import clsx from 'clsx';
import React from 'react';
import ReactModal from 'react-modal';

import Heading from '../../atoms/Heading';
import IconButton from '../IconButton';

type ModalProps = {
  children?: React.ReactNode;
  title?: string;
  closeable?: boolean;
  reverse?: boolean;
  onClose: () => void;
  isOpen: boolean;
};

const Modal: React.FC<ModalProps> = ({
  children,
  title,
  closeable = false,
  reverse = false,
  onClose,
  isOpen,
}) => {
  const hasHeader = title || closeable;

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      closeTimeoutMS={250}
      contentLabel={title || 'Modal'}
      overlayClassName={clsx(
        'fixed inset-0 z-[9999] bg-black/50 opacity-0 transition-opacity duration-300',
        {
          'ReactModal__Overlay--after-open': 'opacity-100',
          'ReactModal__Overlay--before-close': 'opacity-0',
        },
      )}
      className={clsx(
        'absolute top-1/2 left-1/2 box-border flex transform flex-col rounded-sm bg-white text-base text-black outline-none',
        'max-h-[calc(100%-1rem)] max-w-[calc(640px-1rem)] min-w-[320px]',
        'translate-x-[-50%] translate-y-full transition-transform duration-300',
        {
          'ReactModal__Content--after-open': 'translate-y-[-50%]',
          'ReactModal__Content--before-close': 'translate-y-full',
        },
        hasHeader ? 'pt-0' : 'pt-4',
        'mx-[calc(-50%+1rem)] my-4 p-0',
        'sm:w-[calc(100%-1rem)] sm:min-w-0',
      )}
    >
      {hasHeader && (
        <div className="flex items-center p-4">
          <div className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
            <Heading level={2} reverse={reverse}>
              {title}
            </Heading>
          </div>
          {closeable && (
            <IconButton icon="close" onClick={onClose} palette="white" reverse className="ml-2" />
          )}
        </div>
      )}
      <div className="flex-1 overflow-auto px-4 pb-4">{children}</div>
    </ReactModal>
  );
};

export default Modal;
