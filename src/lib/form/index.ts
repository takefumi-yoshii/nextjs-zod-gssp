import { FormEvent } from "react";

export const handleSubmit = (cb: (data: unknown) => void) => {
  return (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data: { [k: string]: unknown } = {};
    formData.forEach((value, key) => (data[key] = value));
    cb(data);
  };
};
