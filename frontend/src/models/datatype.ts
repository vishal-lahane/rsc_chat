export interface Chat {
  chatName: string;
  isGroupChat: boolean;
  users: [string];
  latestMessage: string;
  groupAdmin: boolean;
}
