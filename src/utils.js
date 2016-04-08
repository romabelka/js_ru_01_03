import store from './store'

//warning: not a pure function
export function getRelation(entity, relation) {
    const state = store.getState()
    const relStore = state[relation]
    if (!entity[relation] || !relStore) return []

    return relStore.entities.filter(relEntity => entity[relation].includes(relEntity.id))
}

export const defaultState = {
    loading: false,
    loaded: false,
    entities: []
}
