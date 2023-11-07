export type ChatProfile = {
  // imageAlt?: string;
  // chatImage?: string;
  // chatName?: string;
  // isILast?: string;
  // lastMessage?: string;
  // messageTime?: string;
  chatImage?: string;
  imageAlt?: string;
  chatName?: string;
  lastMessage?: string;
  messageTime?: string;
  isNewMessage?: string;
  isMyLast?: string;
  chatsData?: ChatProfiles;
};

export type ChatProfiles = ChatProfile[];
