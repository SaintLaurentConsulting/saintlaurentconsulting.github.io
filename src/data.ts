export interface Item {
  url: string
  title: string
  description?: string
}

export interface Category {
  name: string
  data: Item[]
}

export const categories: Category[] = [
  {
    name: 'On boarding',
    data: [
      {
        url: 'https://www.amazon.com/',
        title: 'Quicksight Builder',
        description: 'Quicksight Builder login'
      },
      {
        url: 'https://aws.amazon.com/',
        title: 'Quicksight Reader',
        description: 'Quicksight Reader login'
      },
      {
        url: 'https://pharmacy.amazon.com/',
        title: 'Get your access today!',
        description: 'We will add your access within 2 business days'
      }
    ]
  },
  {
    name: 'Quick Links',
    data: [
      {
        url: 'https://example.com',
        title: 'Raise a TT',
        description:
          'Commodo aliqua aliquip dolore pariatur occaecat adipisicing.'
      },
      {
        url: 'https://example.com',
        title: 'Raise a SIM',
        description:
          'Exercitation esse reprehenderit amet magna dolor occaecat nostrud exercitation mollit enim sit.'
      }
    ]
  }
]
