export const validate = (value: string, isNumber: boolean): string => {
  const trimmedValue = value.trim();
  let error = '';

  if (typeof trimmedValue !== 'undefined' && trimmedValue === '') {
    error = 'Пустое поле';
  }

  if (isNumber && trimmedValue && isNaN(parseInt(trimmedValue))) {
    error = 'Введите число';
  }

  return error;
};
