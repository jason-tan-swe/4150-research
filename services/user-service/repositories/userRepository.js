import { User } from '../db/index.js';

export const saveUser = async (data) => await User.create(data);

export const findUserById = async (id) => await User.findByPk(id);
