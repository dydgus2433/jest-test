import { shallowMount } from '@vue/test-utils'
import TodoTitle from '../TodoTitle'
import axios from 'axios'

describe('Todo Title Component', () => {
  let wrapper
  beforeEach(() => {
    const res = {
      data: {
        title: 'delectus aut autem'
      }
    }
    // axios.get = jest.fn(() => {
    //   return new Promise(resolve => {
    //     resolve(res)
    //   })
    // })
    //위에 있는 코드와 같은코드
    axios.get = jest.fn().mockResolvedValue(res)
    wrapper = shallowMount(TodoTitle)
  })

  test('가져온 텍스트를 렌더링', () => {
    setTimeout(() => {
      expect(wrapper.text()).toBe('delectus aut autem')
    })
  })
})
/*
외부서버에서 가져오는 행위는 화면에 출력되는것과 별개의 내용
인터넷을 꺼버리면
테스트 실패 외부의 요인 정상적으로 잘 돌아가는 상황이어야 돌아감
외부에 의존하는 부분 제거하는게 단위테스트에 중요한 부분
 */
