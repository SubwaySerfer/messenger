/* eslint-disable @typescript-eslint/no-explicit-any */

import { authApi } from '../api/AuthApi';
import { LoginUserDTOType } from '../api/AuthApi';
import { RegistrationUserDTOType } from '../api/AuthApi';
import { notifications } from '../utils/Notification';
import { routerApp, Routes } from '../core/Router';
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
      routerApp.go(Routes.Profile);
    } catch (error: any) {
      notifications.addNotification(JSON.parse(error).reason, 'error');
    }
  };

  registration = async (data: RegistrationUserDTOType) => {
    try {
      await this.api.registration(data);
      console.log('Регистрация прошла успешно', 'success');
      routerApp.go(Routes.chats);
    } catch (error: any) {
      notifications.addNotification(JSON.parse(error).reason, 'error');
    }
  };

  logout = async () => {
    console.log('exit pls');
    await this.api.logout();
    routerApp.go(Routes.login);
  };

  getUser = async () => {
    const user = await this.api.getUser();
    store.set('user', user);
    console.log('lll', user);
  };
}

export const authController = new AuthController();
