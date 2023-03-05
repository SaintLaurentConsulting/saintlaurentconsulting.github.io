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
        url: 'https://us-east-2.quicksight.aws.amazon.com/sn/dashboards/a2fa4f5f-c54a-4373-aac7-d0eb68aeb05d/sheets/a2fa4f5f-c54a-4373-aac7-d0eb68aeb05d_3c389903-d66a-427b-ac6c-2513d8d23e65',
        title: 'Quicksight with Non-PII/Non-PHI',
        description: 'Quicksight Builder login'
      },
      {
        url: 'https://analytics.pandora.amazon.dev/',
        title: 'Quicksight with PII/PHI',
        description: 'Pandora PII/PHI Quicksight link'
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
