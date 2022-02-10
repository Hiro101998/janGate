import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { FC, memo } from "react";
import { SignInForm } from "../SignInForm";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};
const RegisterModal: FC<Props> = (props) => {
  const { isOpen, onClose } = props;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>アカウントを作成</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <SignInForm />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default memo(RegisterModal);
