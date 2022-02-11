import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { FC, memo, useRef, useState } from "react";
import SignInForm from "../auth/SignInForm";
import SignUpForm from "../auth/SignUpForm";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  signUpFlg: boolean;
};
const SignUpModal: FC<Props> = (props) => {
  const { isOpen, onClose, signUpFlg } = props;
  if (signUpFlg) {
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>アカウントを作成</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SignUpForm />
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>ログイン</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <SignInForm />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default memo(SignUpModal);
