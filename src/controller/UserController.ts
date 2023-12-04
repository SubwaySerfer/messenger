import { notifications } from '../utils/Notification';
import { routerApp } from '../core/Router';
import { Routes } from '../core/Router';
import {
  UpdatePasswordDTOType,
  UpdateUserDTOType,
  userApi,
} from '../api/UserApi';
import { authController } from './AuthController';
import { store } from '../core/Store';
/* eslint-disable @typescript-eslint/no-explicit-any */

class UserController {
  private readonly api: typeof userApi;

  constructor() {
    this.api = userApi;
  }

  updateUser = async (data: UpdateUserDTOType) => {
    try {
      await this.api.updateUser(data);
      await authController.getUser();
      notifications.addNotification('Данные успешно обновлены', 'success');
      routerApp.go(Routes.Profile);
    } catch (error: any) {
      notifications.addNotification(error.reason, 'error');
    }
  };

  updatePassword = async (data: UpdatePasswordDTOType) => {
    try {
      await this.api.updatePassword(data);
      notifications.addNotification('Пароль успешно обновлен', 'success');
      routerApp.go(Routes.Profile);
    } catch (error: any) {
      notifications.addNotification(error.reason, 'error');
    }
  };

  updateAvatar = async (avatar: File) => {
    try {
      const user = await this.api.updateAvatar(avatar);
      store.set('user', user);
      notifications.addNotification('Аватар успешно обновлен', 'success');
      routerApp.go(Routes.Profile);
    } catch (error: any) {
      notifications.addNotification(error.reason, 'error');
    }
  };
}

export const userController = new UserController();
