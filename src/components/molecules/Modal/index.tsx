import { clsx } from 'clsx';
import type { FC, ReactNode } from 'react';
import ReactModal from 'react-modal';

import Heading from '../../atoms/Heading';
import IconButton from '../IconButton';

type ModalProps = {
  title?: string;
  closeable?: boolean;
  reverse?: boolean;
  onClose: () => void;
  children: ReactNode;
  isOpen: boolean;
  className?: string;
};

const modalOverlayClass = clsx(
  'fixed inset-0 z-[9999] bg-black/50 transition-opacity duration-250',
);

const modalContentBase = clsx(
  'absolute flex flex-col bg-white text-black rounded-sm',
  'top-1/2 left-1/2 transform -translate-x-1/2 translate-y-full',
  'transition-transform duration-250 outline-none',
  'box-border min-w-[320px] max-w-[calc(640px-1rem)] max-h-[calc(100%-1rem)]',
  'pt-4 sm:w-[calc(100%-1rem)] sm:min-w-0',
);

const Modal: FC<ModalProps> = ({
  title,
  closeable,
  reverse,
  onClose,
  children,
  isOpen,
  className,
}) => {
  const hasHeader = title || closeable;

  return (
    <>
      <style>{`body.ReactModal__Body--open { overflow: hidden; }`}</style>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel={title || 'Modal'}
        closeTimeoutMS={250}
        className={
          (({ state }: { state: string }) =>
            clsx(
              modalContentBase,
              state === 'afterOpen' && 'translate-y-[-50%]',
              state === 'beforeClose' && 'translate-y-full',
              hasHeader ? 'pt-0' : 'pt-4',
              className,
            )) as unknown as string
        }
        overlayClassName={
          (({ state }: { state: string }) =>
            clsx(
              modalOverlayClass,
              state === 'afterOpen' && 'opacity-100',
              state === 'beforeClose' && 'opacity-0',
            )) as unknown as string
        }
        ariaHideApp={false}
      >
        {hasHeader && (
          <header className="flex items-center px-4 py-3">
            {title && (
              <Heading level={2} reverse={reverse} className="mr-4 truncate">
                {title}
              </Heading>
            )}
            {closeable && (
              <IconButton icon="close" onClick={onClose} palette="grayscale" reverse={reverse} />
            )}
          </header>
        )}
        <div className="overflow-auto px-4 pb-4">{children}</div>
      </ReactModal>
    </>
  );
};

export default Modal;
