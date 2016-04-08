import store from './store'

//warning: not a pure function
export function getRelation(entity, relation) {
    const state = store.getState()
    const entityStore = state[relation]
    if (!entity[relation] || !entityStore) return []

    return entityStore.filter(relEntity => entity[relation].includes(relEntity.id))
}