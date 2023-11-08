export type ChatProfile = {
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
