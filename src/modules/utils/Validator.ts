enum ValidatorEnum {
  Login = 'login',
  FirstName = 'first_name',
  LastName = 'last_name',
  Email = 'email',
  Password = 'password',
  Phone = 'phone',
}

class FormValidator {
  private form;

  public constructor(parentEl: HTMLElement) {
    this.form = <HTMLFormElement>parentEl.querySelector('form');
  }

  init() {
    let isValidForm = true;
    const inputs = this.form.querySelectorAll('[name]');

    inputs.forEach((inputElement) => {
      const input = <HTMLInputElement>inputElement;

      this.checkValidity(input);

      if (input.dataset.isValid === 'false') {
        isValidForm = false;
        return;
      }
    });

    if (isValidForm) {
      this.getInputValues(this.form);
    }
  }

  getInputValues(form: HTMLFormElement) {
    const formData = new FormData(form);

    console.log(Object.fromEntries([...formData]));
  }

  checkValidity(input: HTMLInputElement) {
    let isValidInput;
    const name = input.name;

    switch (name) {
      case ValidatorEnum.Login:
        isValidInput = this._validateLogin(input);
        break;
      case ValidatorEnum.FirstName:
      case ValidatorEnum.LastName:
        isValidInput = this._validateName(input);
        break;
      case ValidatorEnum.Email:
        isValidInput = this._validateEmail(input);
        break;
      case ValidatorEnum.Password:
        isValidInput = this._validatePassword(input);
        break;
      case ValidatorEnum.Phone:
        isValidInput = this._validatePhone(input);
        break;
      default:
        isValidInput = true;
        break;
    }

    input.dataset.isValid = isValidInput.toString();
  }

  private _validateLogin(input: HTMLInputElement): boolean {
    const regExp = new RegExp(/^[a-zA-Z0-9-_]*$/);
    const errorEl = (input.parentNode as HTMLElement).querySelector(
      '.error__text'
    ) as HTMLElement;

    console.log('ff', errorEl);
    errorEl.textContent = '';

    if (input.value.length < 3 || input.value.length > 20) {
      errorEl.textContent = 'Логин должен быть от 3 до 20 символов';
    } else if (input.value.includes(' ')) {
      errorEl.textContent = 'Пробелы недопустимы';
    } else if (!/[^0-9]/.test(input.value)) {
      errorEl.textContent = 'Логин не может состоять из цифр';
    }

    if (!regExp.test(input.value)) {
      errorEl.textContent = 'Присутствуют недопустимые символы';

      return false;
    }

    return true;
  }

  private _validatePhone(input: HTMLInputElement): boolean {
    const regExp = new RegExp(/^(\+)?(\d){10,14}/);

    const errorEl = (input.parentNode as HTMLElement).querySelector(
      '.error__text'
    ) as HTMLElement;

    errorEl.textContent = '';

    if (!regExp.test(input.value)) {
      errorEl.textContent = 'Не верный формат номера телефона';

      return false;
    }

    return true;
  }

  private _validatePassword(input: HTMLInputElement): boolean {
    const regExp = new RegExp(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z]))/);
    const errorEl = (input.parentNode as HTMLElement).querySelector(
      '.error__text'
    ) as HTMLElement;

    errorEl.textContent = '';

    if (input.value.length < 8 || input.value.length > 40) {
      errorEl.textContent = 'Пароль должен содержать от 8 до 40 символов';
    }

    if (!regExp.test(input.value)) {
      errorEl.textContent =
        'Некорректный пароль. Должна быть хотя бы одна цифра и заглавная буква';

      return false;
    }

    return true;
  }

  private _validateEmail(input: HTMLInputElement): boolean {
    const regExp = new RegExp(
      /^([a-zA-Z0-9_.\-+])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z]{2,4})+$/,
      'gi'
    );

    const errorEl = (input.parentNode as HTMLElement).querySelector(
      '.error__text'
    ) as HTMLElement;

    errorEl.textContent = '';

    if (!regExp.test(input.value)) {
      errorEl.textContent = 'Невалидный email';

      return false;
    }

    return true;
  }

  private _validateName(input: HTMLInputElement): boolean {
    const regExp = new RegExp(/^[а-яА-ЯёЁa-zA-Z-]+$/, 'g');

    const errorEl = (input.parentNode as HTMLElement).querySelector(
      '.error__text'
    ) as HTMLElement;

    errorEl.textContent = '';

    if (input.value === '') {
      errorEl.textContent = 'Заполните поле';
      return false;
    } else if (input.value[0] !== input.value[0].toUpperCase()) {
      errorEl.textContent = 'Первая буква должна быть заглавной';
      return false;
    } else if (!regExp.test(input.value)) {
      errorEl.textContent = 'Используйте символы только латиницы и кириллицы';
      return false;
    }

    return true;
  }
}

export default FormValidator;
