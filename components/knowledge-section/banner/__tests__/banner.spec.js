import { shallow, mount } from 'enzyme'
import Banner from '..'
import { ThemeProvider } from "styled-components"
import theme from '../../../../theme'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({t: key => key})
}))

describe('banner', () => {
  it('banner renders correctly', () => {
    const banner = shallow(<Banner />)
    expect(banner).toMatchSnapshot()
    
  })

  it('banner renders theme correctly', () => {
    const banner = mount(<Banner />, {
      wrappingComponent: ThemeProvider,
      wrappingComponentProps: {
        theme,
      },
    })
    expect(banner).toMatchSnapshot()
  })
})
