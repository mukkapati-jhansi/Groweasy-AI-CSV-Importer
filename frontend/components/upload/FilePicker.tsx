"use client";

import { RefObject } from "react";

type Props = {
  inputRef: RefObject<HTMLInputElement | null>;
  onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function FilePicker({
  inputRef,
  onFileChange,
}: Props) {
  return (
    <input
      ref={inputRef}
      type="file"
      accept=".csv"
      hidden
      onChange={onFileChange}
    />
  );
}