import PropTypes from "prop-types"
import { Modal, Message, Icon, Button } from 'semantic-ui-react'
import { confirmable, createConfirmation } from "react-confirm"
import { useTranslation } from 'react-i18next'

const ConfirmDialog = ({
  okLabel = 'confirmation.ok',
  cancelLabel = 'confirmation.cancel',
  show, 
  proceed, 
  confirmation,
  title, 
  options
}) =>  {
  const { t } = useTranslation()

  return (
    <Modal open={show}>
      <Modal.Content>
        <Message warning icon attached>
          <Icon name='warning sign' />
          <Message.Content>
            <Message.Header>{t(title)}</Message.Header>
            {confirmation}
          </Message.Content>
          <Button
            color='orange'
            content={t(okLabel)}
            onClick={() => proceed(true)}/>
          <Button
            color='grey'
            content={t(cancelLabel)}
            onClick={() => proceed(false)} />
        </Message>
      </Modal.Content>
    </Modal>
  )
}

ConfirmDialog.propTypes = {
  okLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  show: PropTypes.bool,
  proceed: PropTypes.func,
  confirmation: PropTypes.string,
  options: PropTypes.object
}

export function confirm(confirmation) {
  return createConfirmation(confirmable(ConfirmDialog))({
    confirmation,
    okLabel: 'confirmation.yes',
    cancelLabel: 'confirmation.no',
    title: 'confirmation.areyousure'
  })
}
