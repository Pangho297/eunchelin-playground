import {
  modalCloseVar,
  modalOpenVar,
  ModalPropsType,
} from "@/stores/modalStore";
import { useReactiveVar } from "@apollo/client";
import { ComponentType } from "react";

export default function useModal() {
  const open = useReactiveVar(modalOpenVar);
  const close = useReactiveVar(modalCloseVar);

  const openModal = <P extends ModalPropsType>(
    Component: ComponentType<P>,
    props?: P
  ) => {
    open(Component, props ? props : {});
  };

  const closeModal = (key: string) => {
    close(key);
  };

  return { openModal, closeModal };
}
