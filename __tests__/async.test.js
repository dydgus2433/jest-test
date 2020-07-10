function asyncFn () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Passes!')
    }, 1000)
  })
}

describe('비동기', () => {
  test('테스트 1 ', (done) => {
    asyncFn()
      .then(r => {
        expect(r).toBe('Passes!')
        done()

        /**
         * done이 호출되는 구간에서 테스트 끝나게 할 수 있음
         * done이라는 매개변수가 실행될때까지 테스트가 기다리게됨
         * 최대 5초까지 기다림
         * done 사용할 때 주의할 점
         * done 인수가 있는데 실행되는 부분이 없을때
         * 5초가 지닌다음에 테스트가 멈춤
         * 최대 5초까지만 기다리도록 설정되어있음
         * 필요없고 사용하지않으면 파라미터의 done을 지워줘야 끝까지 기다리는
         * 사태 방지
         */
      })
  })
})
