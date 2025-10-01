import { formFields, type SelectField } from "@features/getQuote/types";


export const getServiceLabel = (id: string): string => {
  const serviceField = formFields.find(
    (f): f is SelectField => f.type === "select" && f.name === "service"
  );

  const label = serviceField?.options.find((opt) => opt.value === id)?.label;
  return label || id;
};
