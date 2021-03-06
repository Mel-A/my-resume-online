import { Container, Link } from './styles'
import React from 'react'
import { useTranslation } from 'react-i18next'

const Navbar = () => {
  const { t } = useTranslation('common')
  
  return (
    <Container>
      <Link href="/resume-abuin-melisa.pdf" target="_blank" download >{t('general.download-pdf')}</Link>
    </Container>
  )
}

export default Navbar