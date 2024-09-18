import { shallowMount } from '@vue/test-utils'
import ChooseCat from '@/components/ChooseCat.vue'

describe('ChooseCat.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(ChooseCat, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
