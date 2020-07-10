import { shallowMount } from '@vue/test-utils'
import Message from '../Message'

describe('Message Component', () => {
  test('1', () => {
    const wrapper = shallowMount(Message)
    const wrapperArray = wrapper.findAll('div > *')

    expect(wrapperArray.length).toBe(3)
    expect(wrapperArray.at(0).text()).toBe('1')
    expect(wrapperArray.at(1).text()).toBe('2')
    expect(wrapperArray.at(2).text()).toBe('3')
  })
})
