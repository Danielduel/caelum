import React from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
`;

const ModalWindow = styled.div`
  width: calc(100% - 2rem);
  height: calc(100% - 2rem);
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.8);
  border-radius: 0.5rem;
  box-sizing: border-box;
  padding: 1em;
`;

export type ModalProps = {
  visible: boolean;
  close?: () => void;
  children: React.ReactNode;
};

export const Modal = ({ visible, children }: ModalProps): JSX.Element | null => {
  if (!visible) {
    return null;
  }

  return (
    <ModalOverlay>
      <ModalWindow>{children}</ModalWindow>
    </ModalOverlay>
  );
};
