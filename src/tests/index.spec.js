const loader = require('../')

const mockRule = (cb = () => {}) => ({
  cacheable: jest.fn(),
  async: jest.fn(() => cb),
})

describe('test prejss-styles-loader for webpack', () => {
  it('should should not call anything', () => {
    const rule = mockRule()

    loader.call(rule, '')

    expect(rule.cacheable).not.toHaveBeenCalled()
    expect(rule.async).not.toHaveBeenCalled()
  })

  it('should call cacheable()', () => {
    const rule = mockRule()

    loader.call(rule, `
      class {
        color: 'red'
      }
    `)

    expect(rule.cacheable).toHaveBeenCalled()
  })

  it('should call async()', () => {
    const rule = mockRule()

    loader.call(rule, `
      class {
        color: 'red'
      }
    `)

    expect(rule.async).toHaveBeenCalled()
  })

  it('should process styles', () => {
    const stylesMock = `module.exports = {"class":{"color":"'red'"}};`

    const rule = mockRule((error, result) => expect(result).toEqual(stylesMock))

    loader.call(rule, `
      class {
        color: 'red'
      }
    `)
  })
})
