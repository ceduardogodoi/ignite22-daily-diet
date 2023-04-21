import { useState } from 'react'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'

import { Button } from '@components/Button'
import { RemoveMealModal } from '@components/RemoveMealModal'
import { StatusBar } from '@components/StatusBar'

import { AppNavigatorRoutesProps, AppRoutes } from '@routes'

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
} from './styles'

export function MealDetail() {
  const navigation = useNavigation<AppNavigatorRoutesProps>()

  const route = useRoute<RouteProp<AppRoutes, 'MealDetail'>>()
  const { meal } = route.params

  let status: 'fail' | 'success' | 'neutral';
  switch (meal.status) {
    case 'bad': {
      status = 'fail'
      break
    }
    case 'good': {
      status = 'success'
      break
    }
    default: {
      status = 'neutral'
    }
  }

  const [isRemoveMealModalOpen, setRemoveMealModalOpen] = useState(false)


  function handleBack() {
    navigation.navigate('Home')
  }

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
        <TitleContainer>
          <Title>Refeição</Title>
        </TitleContainer>

        <LeftArrowButtonContainer onPress={handleBack}>
          <LeftArrowButton status={status} />
        </LeftArrowButtonContainer>
      </Header>

      <MainContent>
        <MealName>{meal.meal}</MealName>

        <MealDescription>
          {meal.description}
        </MealDescription>

        <DateAndTime>Data e hora</DateAndTime>
        <DateAndTimeText>{meal.eatenAt} às {meal.time}</DateAndTimeText>

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
