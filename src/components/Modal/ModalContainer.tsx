import { modalCloseVar, ModalPropsType, modalsVar } from "@/stores/modalStore";
import { useReactiveVar } from "@apollo/client";
import { Nullable } from "@/types/common";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import * as ModalS from "./DefaultModal.style";

export { ModalS };
export default function ModalContainer() {
  const [portal, setPortal] = useState<Nullable<Element>>(null);

  const modals = useReactiveVar(modalsVar);
  const close = useReactiveVar(modalCloseVar);

  useEffect(() => {
    setPortal(document.getElementById("modal"));
  }, []);

  return (
    portal &&
    createPortal(
      modals.map((m) => {
        const { Component, props, key } = m;
        const { onSubmit = () => {}, onClose = () => {}, ...restProps } = props;

        const handleClose = async () => {
          await onClose?.();
          close(key);
        };

        const handleSubmit = async (_props?: ModalPropsType) => {
          await onSubmit?.(_props);
          close(key);
        };

        return (
          <Component
            key={key}
            modalId={props.modalId}
            onSubmit={handleSubmit}
            onClose={handleClose}
            {...restProps}
          />
        );
      }),
      portal
    )
  );
}
