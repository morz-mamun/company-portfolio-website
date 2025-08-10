export interface IChatMessage {
  id: string;
  message: string;
  sender: string;
  avatar: string;
  time: string;
  isOwn: boolean;
  type: 'text' | 'image' | 'file';
}

export const chatMessagesData: IChatMessage[] = [
  {
    id: '1',
    message: "Hey! How's the project coming along?",
    sender: 'Alice',
    avatar: '👩‍💻',
    time: '2:30 PM',
    isOwn: false,
    type: 'text',
  },
  {
    id: '2',
    message: 'Going great! Just finished the new feature',
    sender: 'You',
    avatar: '😊',
    time: '2:31 PM',
    isOwn: true,
    type: 'text',
  },
  {
    id: '3',
    message: "That's awesome! Can you show me a demo?",
    sender: 'Alice',
    avatar: '👩‍💻',
    time: '2:32 PM',
    isOwn: false,
    type: 'text',
  },
  {
    id: '4',
    message: 'Let me record a quick video',
    sender: 'You',
    avatar: '😊',
    time: '2:33 PM',
    isOwn: true,
    type: 'text',
  },
  {
    id: '5',
    message: "Perfect! I'll be waiting 🎉",
    sender: 'Alice',
    avatar: '👩‍💻',
    time: '2:34 PM',
    isOwn: false,
    type: 'text',
  },
  {
    id: '6',
    message: "Here's the demo video!",
    sender: 'You',
    avatar: '😊',
    time: '2:45 PM',
    isOwn: true,
    type: 'file',
  },
];
