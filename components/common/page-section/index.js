import { Wrapper } from './styles'
import PropTypes from 'prop-types'

const PageSection = ({ className, children }) => (
  <Wrapper className={className} >
    {children}
  </Wrapper>
)

PageSection.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

export default PageSection