import localFont from 'next/font/local'

const EmberDisplay = localFont({
  variable: '--ember-display',
  src: [
    {
      path: 'public/font/EmberDisplay_Lt.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: 'public/font/EmberDisplay_Rg.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: 'public/font/EmberDisplay_Bd.woff2',
      weight: '700',
      style: 'normal'
    }
  ]
})

const Ember = localFont({
  variable: '--ember',
  src: [
    {
      path: 'public/font/Ember_Lt.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: 'public/font/Ember_Rg.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: 'public/font/Ember_Bd.woff2',
      weight: '700',
      style: 'normal'
    }
  ]
})

const EmberMono = localFont({
  variable: '--ember-mono',
  src: [
    {
      path: 'public/font/EmberMono_Rg.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: 'public/font/EmberMono_Bd.woff2',
      weight: '700',
      style: 'normal'
    }
  ]
})

const ClassName = `${EmberDisplay.variable} ${Ember.variable} ${EmberMono.variable}`
export { EmberDisplay, Ember, EmberMono, ClassName }
