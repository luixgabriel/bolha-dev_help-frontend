export interface ICategory {
  id: string
  name: string
}

const categoryList: ICategory[] = [
  {
    id: 'frontend',
    name: 'Front-End',
  },
  {
    id: 'backend',
    name: 'Back-End',
  },
  {
    id: 'mobile',
    name: 'Mobile',
  },
  {
    id: 'devops',
    name: 'Devops',
  },
  {
    id: 'cloud',
    name: 'Cloud',
  },
  {
    id: 'outros',
    name: 'Outros',
  },
]

export default categoryList
