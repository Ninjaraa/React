import { render } from '@testing-library/react'
import Counter from './Counter'

describe(Counter, () => {
    it('counter should display initial value of 0', () => {
        const { getByTestId } = render(<Counter init={0} />)
        const value = Number(getByTestId('count').textContent)

        expect(value).toEqual(0)

    })
})