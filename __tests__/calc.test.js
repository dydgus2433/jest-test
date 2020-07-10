import { addOne } from '../calc'

//테스트 그룹 만들때
describe('addOne', () => {

  beforeAll(() => {
    console.log('beforeAll')
  }) //모든 테스트전
  afterAll(() => {
    console.log('afterAll')
  }) //모든 테스트 후
  beforeEach(() => {
    console.log('beforeEach')
  })  //각각의 테스트 전
  afterEach(() => {
    console.log('afterEach')
  }) //각각의 테스트 후

  test('1', () => {
    console.log('test 1')
  })
  test('2', () => {
    console.log('test 2')
  })

//jest 내부의 전역함수 사용가능
  test('첫번째 테스트', () => {
    expect(3).toBe(3)
  })

  test('인수가 숫자인 경우', () => {
    expect(addOne(2)).toBe(3)
    expect(addOne(7)).toBe(8)
    //실패된 값과 눈으로 확인할 수 있는 구조를 보고
    //처음부터 통과하면 테스트를 잘못 작성했기 떄문에 통과하는 경우 방지하기 위해
    //그래서 강제적으로 틸리게 해주고 맞게 수정하는걸로 조정

  })

  test('인수가 문자인 경우', () => {
    expect(addOne('2')).toBe(3)
    expect(addOne('77')).toBe(78)
  })
})
