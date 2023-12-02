import { notifications } from './Notification';

export const checkValidityInput = (el: HTMLInputElement) => {
  const isCorrect = el.checkValidity();
  if (!isCorrect) {
    console.log(el.title, 'error');
  } else {
    notifications.addNotification(`Поле ${el.name} заполнено верно`, 'success');
  }
  return isCorrect;
};
