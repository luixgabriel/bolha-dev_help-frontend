import { IAnswers } from '../types/answers'

const answers: IAnswers[] = [
  {
    id: '1',
    description: 'Answer 1',
    likes: 10,
    createdAt: '2023-11-14T12:00:00',
    user: {
      id: 'user1',
      name: 'John Doe',
      email: 'john@example.com',
    },
    doubts: {
      id: 'doubt1',
      description: 'Doubt 1',
      createdAt: '2023-11-14T10:00:00',
      userId: 'user2',
    },
    Comment: ['Comment 1', 'Comment 2'],
  },
  {
    id: '2',
    description: 'Answer 2',
    likes: 8,
    createdAt: '2023-11-14T13:30:00',
    user: {
      id: 'user3',
      name: 'Jane Doe',
      email: 'jane@example.com',
    },
    doubts: {
      id: 'doubt2',
      description: 'Doubt 2',
      createdAt: '2023-11-14T11:30:00',
      userId: 'user4',
    },
    Comment: ['Comment 3', 'Comment 4'],
  },
]

export default answers
