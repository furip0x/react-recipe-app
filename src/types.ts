export interface Ingredient {
  name: string
  measure: string
  image: string
}

export interface IMeal {
  id: string
  name: string
  isFavourite: boolean
  category: string
  country: string
  area: string
  instructions: string
  image: string
  tags: string[]
  ingredients: Ingredient[]
}

export interface IMealItems {
  // key: string
  id: string
  isFavourite: boolean
  image: string
  name: string
  instructions: string
  country: string
  category: string
}

export interface IModal {
  mealId: string
  isVisible?: boolean
  image?: string
  name?: string
}
