import { Heading, IconButton } from 'components';
import type { ReactNode } from 'react';
import ReactModal from 'react-modal';
import styled, { css, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body.ReactModal__Body--open {
    overflow: hidden;
  }
`;

const overlayStyles = css`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 9999;
  transition: opacity 250ms ease-in-out;
  opacity: 0;
  &[class*='after-open'] {
    opacity: 1;
  }
  &[class*='before-close'] {
    opacity: 0;
  }
`;

const ModalBox = styled(ReactModal)<{ hasHeader: boolean }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.palette.grayscale[0]};
  border-radius: 0.125em;
  color: ${({ theme }) => theme.palette.grayscale[0]};
  top: calc(50% - 1rem);
  left: calc(50% - 1rem);
  right: auto;
  bottom: auto;
  margin: 1rem calc(-50% + 1rem) 1rem 1rem;
  transform: translate(-50%, 100%);
  transition: transform 250ms ease-in-out;
  outline: none;
  box-sizing: border-box;
  min-width: 320px;
  max-width: calc(640px - 1rem);
  max-height: calc(100% - 1rem);
  padding-top: ${({ hasHeader }) => (hasHeader ? 0 : '1rem')};
  @media screen and (max-width: 640px) {
    width: calc(100% - 1rem);
    min-width: 0;
  }
  &[class*='after-open'] {
    transform: translate(-50%, -50%);
  }
  &[class*='before-close'] {
    transform: translate(-50%, 100%);
  }
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 1rem;
  > *:first-child {
    flex: 1;
  }
`;

const StyledHeading = styled(Heading)`
  margin: 0 1rem 0 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const Content = styled.div`
  overflow: auto;
  padding: 0 1rem;
  margin-bottom: 1rem;
`;

const StyledReactModal = styled(({ className, ...props }: any) => (
  <ModalBox overlayClassName={className} closeTimeoutMS={250} {...props} />
))`
  ${overlayStyles}
`;

interface ModalProps {
  children?: ReactNode;
  title?: string;
  closeable?: boolean;
  reverse?: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({
  children,
  title,
  closeable,
  reverse,
  onClose,
  ...props
}) => {
  const hasHeader = !!title || !!closeable;
  return (
    <>
      <GlobalStyle />
      <StyledReactModal
        contentLabel={title || 'Modal'}
        onRequestClose={onClose}
        hasHeader={hasHeader}
        {...props}
      >
        {hasHeader && (
          <Header>
            <StyledHeading level={2} reverse={reverse}>
              {title}
            </StyledHeading>
            {closeable && <IconButton icon="close" onClick={onClose} palette="white" reverse />}
          </Header>
        )}
        <Content>{children}</Content>
      </StyledReactModal>
    </>
  );
};

export default Modal;
