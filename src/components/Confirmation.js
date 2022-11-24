import PropTypes from "prop-types"
import { Confirm } from 'semantic-ui-react'
import { confirmable, createConfirmation } from "react-confirm"
import { useTranslation } from 'react-i18next'

const ConfirmDialog = ({show, proceed, confirmation, options}) =>  {
  const { t } = useTranslation()

  return (
    <Confirm 
      open={show}
      content={confirmation}
      cancelButton={t('confirmation.cancel')}
      confirmButton={t('confirmation.confirm')}
      onCancel={() => proceed(false)}
      onConfirm={() => proceed(true)}
      size='mini'  
    />
  )
}

ConfirmDialog.propTypes = {
  show: PropTypes.bool,
  proceed: PropTypes.func,
  confirmation: PropTypes.string,
  options: PropTypes.object
}

export function confirm(
  confirmation,
  options = {}
) {
  return createConfirmation(confirmable(ConfirmDialog))({
    confirmation,
    ...options
  })
}
