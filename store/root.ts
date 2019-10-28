import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import { Root } from '@/types'

@Module({
  stateFactory: true,
  namespaced: true,
  name: 'root'
})
export default class RootStore extends VuexModule implements Root {
  isLoading = false

  @Mutation
  public CHANGE_LOADING(isLoading: boolean) {
    console.log('Mutation: ', isLoading)
    this.isLoading = isLoading
  }

  @Action({})
  public changeLoadingVisibility(isLoading: boolean) {
    console.log('Action: ', isLoading)
    this.CHANGE_LOADING(isLoading)
  }
}