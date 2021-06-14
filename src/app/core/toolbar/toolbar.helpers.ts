export type NotificationBar = {
  notifications: Notification[];
  currentUser: {
    photoURL: string;
    currentUserName: string;
  };
};

export type CurrentUser = {
  photoURL: string;
  name: string;
  lastName: string;
  id: string;
};

export type Notification = {
  id: string;
  title: string;
  lastTime: string;
  state: string;
};

export const ToolbarHelpers: NotificationBar = {
  notifications: [
    {
      id: 'id',
      title: 'Mail 5',
      lastTime: '23 Minutes ago',
      state: 'state',
    },
    {
      id: 'id',
      title: 'Mail 5',
      lastTime: '23 Minutes ago',
      state: 'state',
    },
    {
      id: 'id',
      title: 'Mail 5',
      lastTime: '23 Minutes ago',
      state: 'state',
    },
  ],

  currentUser: {
    photoURL: 'assets/images/avatars/avatar.png',
    currentUserName: 'J Carballo',
  },
};

export const currentUser: CurrentUser = {
  photoURL: 'assets/images/avatars/avatar.png',
  name: 'J',
  lastName: 'Carballo',
  id: '1',
};

export const notification: Notification[] = [
  {
    id: 'id',
    title: 'Mail 5',
    lastTime: '23 Minutes ago',
    state: 'state',
  },
  {
    id: 'id',
    title: 'Mail 5',
    lastTime: '23 Minutes ago',
    state: 'state',
  },
  {
    id: 'id',
    title: 'Mail 5',
    lastTime: '23 Minutes ago',
    state: 'state',
  },
];
