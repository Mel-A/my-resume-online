import PropTypes from 'prop-types'
import { Container, Content, Header, Icon, PageContainer, Title } from './styles'
import { useTranslation } from 'react-i18next'
import { Button } from '..'

const Modal = ({ onClick, modalState, title, body }) => {
  const { t } = useTranslation('common')

  const closeModal = event => {
    onClick(event)
  }

  if(!modalState){
    return null
  }
  return (
    <PageContainer>
      <Container>
        <Header>
          <Title>{title}</Title>
          <Icon src="/cross-icon.png" onClick={() => closeModal(modalState)} />
        </Header>
        <Content>
          {body}
        </Content>
        <Button onClick={() => closeModal(modalState)}>
        {t('general.close')}
        </Button>
      </Container>
    </PageContainer>
  )
}

export default Modal

Modal.propTypes = {
  modalState: PropTypes.bool,
  onClick: PropTypes.func,
  body: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}