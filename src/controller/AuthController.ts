/* eslint-disable @typescript-eslint/no-explicit-any */

import { authApi } from '../api/AuthApi';
import { LoginUserDTOType } from '../api/AuthApi';
import { RegistrationUserDTOType } from '../api/AuthApi';
import { notifications } from '../utils/Notification';
// import { routerApp } from '../core/Route';
import Route, { Routes } from '../core/Router';
import { store } from '../core/Store';

class AuthController {
  private readonly api: typeof authApi;

  constructor() {
    this.api = authApi;
  }

  login = async (data: LoginUserDTOType) => {
    try {
      await this.api.login(data);
      await this.getUser();
      notifications.addNotification('Вход выполнен успешно', 'success');
      Route.go(Routes.Profile);
    } catch (error: any) {
      notifications.addNotification(JSON.parse(error).reason, 'error');
    }
  };

  registration = async (data: RegistrationUserDTOType) => {
    console.log('registration: ', data);
    try {
      await this.api.registration(data);
      console.log('Регистрация прошла успешно', 'success');
      Route.go(Routes.chats);
    } catch (error: any) {
      notifications.addNotification(JSON.parse(error).reason, 'error');
    }
  };

  logout = async () => {
    await this.api.logout();
    Route.go('/');
  };

  getUser = async () => {
    const user = await this.api.getUser();
    store.set('user', user);
  };
}

export const authController = new AuthController();
