import type { InjectionKey } from 'vue'
import type { Store } from 'vuex'
import { useStore as baseUseStore, createStore } from 'vuex'
import type { User } from '@/apis/user'

// 声明 State 类型
export interface State {
  count: number
  user: User | null
}

// define injection key
// eslint-disable-next-line symbol-description
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    count: 123,
    user: JSON.parse(window.localStorage.getItem('user') || 'null'),
  },
  mutations: {
    setUser(state, user: User) {
      state.user = user
      window.localStorage.setItem('user', JSON.stringify(state.user))
    },
  },
})

// define your own `useStore` composition function
export function useStore() {
  return baseUseStore(key)
}
