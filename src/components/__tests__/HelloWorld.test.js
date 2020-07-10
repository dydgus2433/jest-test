import { mount, shallowMount} from '@vue/test-utils'
import HelloWorld from '../HelloWorld'

describe('HelloWorld Component', () => {

  test('mounting', () => {
    const wrapper = mount(HelloWorld)
    console.log(wrapper.html())
    expect(wrapper.text()).toBe('Hello World!')
  })
  /**
   * 나머지 하위 컴포넌트는 가짜 처리해버림
   * 하위 컴포넌트의 기능은 출력이 되지않음
   * 실제로 렌더링 되지 않음
   */
  test('shallows mounting', () => {
    const wrapper = shallowMount(HelloWorld)
    console.log(wrapper.html())
    expect(wrapper.text()).toBe('Hello')
  })
})
