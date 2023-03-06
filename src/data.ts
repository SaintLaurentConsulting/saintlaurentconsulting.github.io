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
    name: 'Team Wikis',
    data: [
      {
        url: 'https://w.amazon.com/bin/view/AP_DAPP/',
        title: 'DAPP Team Wiki',
        description:
          'Wiki Page for DAPP Team'
      },
      {
        url: 'https://w.amazon.com/bin/view/Pharmacy/Public/Teams/StrategicOperationsAnalytics_SOT/',
        title: 'SOT Wiki',
        description:
          'Wiki Page for SOT'
      }
    ]
  },
  {
    name: 'Data Analytical Platforms',
    data: [
      {
        url: 'https://us-east-2.quicksight.aws.amazon.com/sn/dashboards/a2fa4f5f-c54a-4373-aac7-d0eb68aeb05d/sheets/a2fa4f5f-c54a-4373-aac7-d0eb68aeb05d_3c389903-d66a-427b-ac6c-2513d8d23e65',
        title: 'Quicksight with Non-PII/Non-PHI dataset',
        description: 'Quicksight Builder login'
      },
      {
        url: 'https://analytics.pandora.amazon.dev/',
        title: 'Quicksight with PII/PHI dataset',
        description: 'Pandora PII/PHI Quicksight link'
      },
      {
        url: 'https://pillpack.looker.com/login',
        title: 'Looker',
        description: 'Pillpack Looker (Legacy)'
      }
    ]
  },
  {
    name: 'Contact Us',
    data: [
      {
        url: 'https://w.amazon.com/bin/view/AP_DAPP/Engagement_model/#HOncallTickets28SIM-T29',
        title: 'Raise a SIM-T',
        description:
          'Raise a SIM-T to DAPP-Eng'
      },
      {
        url: 'https://w.amazon.com/bin/view/AP_DAPP/Engagement_model/#HSIM28SprintTask29',
        title: 'Raise a SIM to DAPP',
        description:
          'Raise a SIM to DAPP'
      },
      {
        url: 'https://w.amazon.com/bin/view/AP_DAPP/Engagement_model/#HSIM28SprintTask29',
        title: 'Raise a SIM to SOT',
        description:
          'Raise a SIM to SOT'
      },
    ]
  }
]
