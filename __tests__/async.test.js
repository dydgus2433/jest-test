function asyncFn () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Passes!')
    }, 6000)
  })
}

describe('비동기', () => {

  /**
   * 거의 대부분은 이 패턴을 사용
   */
  test('async/await', async () => {
    const r = await asyncFn()
    expect(r).toBe('Passes!')

  }, 7000)
})
