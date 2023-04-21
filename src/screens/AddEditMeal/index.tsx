import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { Controller, useForm } from 'react-hook-form'

import { Button } from '@components/Button'
import { InputField } from '@components/Field'
import { Select } from '@components/Select'
import { StatusBar } from '@components/StatusBar'
import { Label } from '@components/Typography'

import { AppNavigatorRoutesProps, AppRoutes } from '@routes'

import { useAppContext } from '@store/AppContextProvider'

import { MealDTO } from '@models/Meal'

import {
  Container,
  CreateMealButtonContainer,
  DateTimeContainer,
  Header,
  LeftArrowButton,
  LeftArrowButtonContainer,
  MainContent,
  Option,
  OptionsContainer,
  Separator,
  Title,
  TitleContainer
} from './styles'

export function AddEditMeal() {
  const navigation = useNavigation<AppNavigatorRoutesProps>()

  const route = useRoute<RouteProp<AppRoutes, 'AddEditMeal'>>()
  const editingMeal = route.params?.meal

  const { addMeal } = useAppContext()

  const { control, handleSubmit, setValue, watch } = useForm<MealDTO>({
    defaultValues: editingMeal,
  })
  const status = watch('status')

  function handleArrowPress() {
    navigation.navigate('Home')
  }

  function submit(data: MealDTO) {
    // TODO: tratar quando nova refeição ou edição de refeição
    addMeal(data)
  }

  return (
    <Container>
      <StatusBar barStyle="dark-content" />

      <Header>
        <LeftArrowButtonContainer onPress={handleArrowPress}>
          <LeftArrowButton />
        </LeftArrowButtonContainer>

        <TitleContainer>
          <Title>{editingMeal ? 'Editar' : 'Nova'} refeição</Title>
        </TitleContainer>
      </Header>

      <MainContent>
        <Controller
          name="meal"
          control={control}
          render={({ field: { onBlur, onChange, value } }) => (
            <InputField
              label="Nome"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        <Controller
          name="description"
          control={control}
          render={({ field: { onBlur, onChange, value } }) => (
            <InputField
              label="Descrição"
              multiline
              style={{ textAlignVertical: 'top' }}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        <DateTimeContainer>
          <Controller
            name="eatenAt"
            control={control}
            render={({ field: { onBlur, onChange, value } }) => (
              <InputField
                label="Data"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={{ minWidth: '47.5%' }}
              />
            )}
          />

          <Separator style={{ minWidth: '5%' }} />

          <Controller
            name="time"
            control={control}
            render={({ field: { onBlur, onChange, value } }) => (
              <InputField
                label="Hora"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={{ minWidth: '47.5%' }}
              />
            )}
          />
        </DateTimeContainer>

        <Label>Está dentro da dieta?</Label>
        <OptionsContainer>
          <Controller
            name="status"
            control={control}
            render={() => (
              <Option>
                <Select
                  title="Sim"
                  status="success"
                  isSelected={status === 'good'}
                  onPress={() => setValue('status', 'good')}
                  style={{ minWidth: '47.5%' }}
                />
              </Option>
            )}
          />

          <Separator style={{ minWidth: '5%'}} />

          <Controller
            name="status"
            control={control}
            render={() => (
              <Option>
                <Select
                  title="Não"
                  status="fail"
                  isSelected={status === 'bad'}
                  onPress={() => setValue('status', 'bad')}
                  style={{ minWidth: '47.5%' }}
                />
              </Option>
            )}
          />
        </OptionsContainer>

        <CreateMealButtonContainer>
          <Button
            title={editingMeal ? 'Salvar alterações' : 'Cadastrar refeição'}
            onPress={handleSubmit(submit)}
          />
        </CreateMealButtonContainer>
      </MainContent>
    </Container>
  )
}
