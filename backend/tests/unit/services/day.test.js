const { DayJs } = require('../../../src/services/utils')

describe('DayJs Validation', () => {
    test('length test', () => {
        const now = DayJs.now()
        const lengthValue = now.length
        const lengthExpected = 19

        expect(lengthValue).toBe(lengthExpected)
    })

    test('object dayjs exists test', () => {
        const dayJs = DayJs.dayJs()

        expect(dayJs).toBeTruthy()
    })
})