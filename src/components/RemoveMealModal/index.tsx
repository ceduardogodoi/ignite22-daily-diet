import { Button } from '@components/Button'

import { ActionsContainer, Container, Description, DropShadow } from './styles'

type Props = {
  open?: boolean
  onClose(): void
  onConfirm(): void
}

export function RemoveMealModal({
  onClose: handleClose,
  onConfirm: handleConfirm,
  open = false
}: Props) {
  if (!open) {
    return null;
  }

  return (
    <DropShadow>
      <Container>
        <Description>
          Deseja realmente excluir o{'\n'}
          registro da refeição?
        </Description>

        <ActionsContainer>
          <Button
            title="Cancelar"
            variant="outline"
            style={{ minWidth: 135 }}
            onPress={handleClose}
          />
          <Button
            title="Sim, excluir"
            style={{ minWidth: 135 }}
            onPress={handleConfirm}
          />
        </ActionsContainer>
      </Container>
    </DropShadow>
  )
}