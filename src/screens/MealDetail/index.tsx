import { useState } from 'react'

import { Button } from '@components/Button'
import { RemoveMealModal } from '@components/RemoveMealModal'
import { StatusBar } from '@components/StatusBar'

import { BoxStatus } from '@styles/global'

import {
  ActionsContainer,
  Container,
  DateAndTime,
  DateAndTimeText,
  Header,
  LeftArrowButton,
  LeftArrowButtonContainer,
  MainContent,
  MealDescription,
  MealName,
  Tag,
  Title,
  TitleContainer
} from './styles';

type Props = {
  status?: BoxStatus
}

export function MealDetail({ status = 'neutral' }: Props) {
  const [isRemoveMealModalOpen, setRemoveMealModalOpen] = useState(false)

  function handleOpenRemoveMealModal() {
    setRemoveMealModalOpen(true);
  }

  function handleCloseRemoveMealModal() {
    setRemoveMealModalOpen(false);
  }

  function handleConfirmRemoveMealModal() {
    console.log('to implement');
  }

  let tagText: string | undefined
  switch (status) {
    case 'fail': {
      tagText = 'fora da dieta'
      break
    }
    case 'success': {
      tagText = 'dentro da dieta'
      break
    }
    case 'neutral':
    default: {
      tagText = undefined
    }
  }

  return (
    <Container status={status}>
      <StatusBar barStyle="dark-content" status={status} />

      <Header status={status}>
        <LeftArrowButtonContainer>
          <LeftArrowButton status={status} />
        </LeftArrowButtonContainer>

        <TitleContainer>
          <Title>Refeição</Title>
        </TitleContainer>
      </Header>

      <MainContent>
        <MealName>Sanduíche</MealName>

        <MealDescription>
          Sanduíche de pão integral com atum e salada de alface e tomate
        </MealDescription>

        <DateAndTime>Data e hora</DateAndTime>
        <DateAndTimeText>12/08/2022 às 16:00</DateAndTimeText>

        {tagText && <Tag title={tagText} status={status} disabled />}

        <ActionsContainer>
          <Button
            title="Editar refeição"
            icon="pencil"
          />
          <Button
            title="Excluir refeição"
            icon="trash"
            variant="outline"
            onPress={handleOpenRemoveMealModal}
          />
        </ActionsContainer>
      </MainContent>

      <RemoveMealModal
        open={isRemoveMealModalOpen}
        onClose={handleCloseRemoveMealModal}
        onConfirm={handleConfirmRemoveMealModal}
      />
    </Container>
  )
}
