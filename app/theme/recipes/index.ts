import { article } from './article'
import { columnsMenu } from './columns-menu'
import { componentRecipes, componentSlotRecipes } from './components'
import { layout } from './layout'
import { loading } from './loading'
import { overlay } from './overlay'

export const recipes = {
  ...componentRecipes,
  overlay,
}

export const slotRecipes = {
  ...componentSlotRecipes,
  layout,
  article,
  columnsMenu,
  loading,
}
