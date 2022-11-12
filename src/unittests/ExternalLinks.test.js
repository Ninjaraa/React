import { render } from '@testing-library/react'
import ExternalLinks from './ExternalLinks';

describe(ExternalLinks, () => {
  it('Should be triggered by finding external links', () => {
    const {getByTestId} = render(<ExternalLinks />)
    const Click = getByTestId('externallink')
        
    expect(Click).toBeDefined()

    console.log(Click);
    

  })
})