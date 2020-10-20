import {createFeatureSelector, createSelector} from '@ngrx/store'

export const moviesSlice = createFeatureSelector('movies')
export const moviesSelector = createSelector(moviesSlice, ({items}) => {
  return items
})