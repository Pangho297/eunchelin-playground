import { makeVar } from "@apollo/client";
import { ComponentType } from "react";

export type ModalPropsType = {
  onClose?: () => void;
  onSubmit?: (event?: any) => void;
  closeText?: string;
  submitText?: string;
  modalId?: string;
  [property: string]: any;
};

type ModalType = {
  key: string;
  props: ModalPropsType;
  Component: ComponentType<ModalPropsType>;
};

type ModalOpenType = (
  Component: ComponentType<any>,
  props: ModalPropsType
) => void;

type ModalCloseType = (key: string) => void;

type ModalClearType = () => void;

/** 열린 모달 목록 */
export const modalsVar = makeVar<ModalType[]>([]);

/** 모달 열기 */
export const modalOpenVar = makeVar<ModalOpenType>(
  (Component: ComponentType<any>, props: ModalPropsType) => {
    const modals = modalsVar();
    const modal = props.key ? modals.find((m) => m.key === props.key) : null;
    const key = props.key || Date.now().toString();
    props.modalId = key;

    if (!modal) {
      modalsVar([...modals, { Component, props, key }]);
    }
  }
);

/** 모달 닫기 */
export const modalCloseVar = makeVar<ModalCloseType>((key) => {
  const modals = modalsVar();
  modalsVar(modals.filter((m) => m.key !== key));
});

/** 모달 초기화 */
export const modalClearVar = makeVar<ModalClearType>(() => {
  modalsVar([]);
});
