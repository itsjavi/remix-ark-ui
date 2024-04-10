import type { ThemeColor } from '@/theme/colors/config'

const accentColor: ThemeColor = 'blue' // e.g. neutral, bronze, brown, gold, slate, blueberry
const grayColor: ThemeColor = 'slate' // e.g. slate, sand,...
const secondaryColor: ThemeColor = 'yellow'
const dangerColor: ThemeColor = 'red'

const themeConfig = {
  colors: {
    accentColor,
    grayColor,
    secondaryColor,
    dangerColor,
  },
}

export default themeConfig
