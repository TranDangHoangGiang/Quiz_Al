"use client";
import { useState } from "react";

interface Iprops {
  showModalCreate: boolean;
  setShowModalCreate: (v: boolean) => void;
}

function CreateModal(props: Iprops) {
  const { showModalCreate, setShowModalCreate } = props;

  return (
    <>
      <div>
        <title>Câu hỏi 1</title>
        <input
          type="text"
          placeholder="Nhập câu hỏi tại đây"
          className="w-3/4 border border-gray-200"
        />
      </div>
    </>
  );
}
export default CreateModal;
