// The formatValue function will handle missing or invalid values
export const formatValue = (value: any) => {
  return value ? value : '-';
};

export const dateFormatter = (value: string | undefined): string => {
  if (!value) return '-';
  const date = new Date(value);
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
};
