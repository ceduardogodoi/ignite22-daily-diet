import { useNavigation } from '@react-navigation/native'
import { Controller, useForm } from 'react-hook-form'

import { Button } from '@components/Button'
import { InputField } from '@components/Field'
import { Select } from '@components/Select'
import { StatusBar } from '@components/StatusBar'
import { Label } from '@components/Typography'

import { AppNavigatorRoutesProps } from '@routes'

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
  Title,
  TitleContainer
} from './styles'

type FormData = {
  id?: string
  time: string
  meal: string
  description?: string
  status: 'bad' | 'good'
  eatenAt: string
}

export function AddMeal() {
  const navigation = useNavigation<AppNavigatorRoutesProps>()

  const { control, handleSubmit, setValue, watch } = useForm<FormData>()

  const status = watch('status')

  function handleArrowPress() {
    navigation.navigate('Home')
  }

  function submit(data: FormData) {
    console.log(JSON.stringify(data, null, 2));
  }

  return (
    <Container>
      <StatusBar barStyle="dark-content" />

      <Header>
        <LeftArrowButtonContainer onPress={handleArrowPress}>
          <LeftArrowButton />
        </LeftArrowButtonContainer>

        <TitleContainer>
          <Title>Nova refeição</Title>
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
                style={{ minWidth: 160 }}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          <Controller
            name="time"
            control={control}
            render={({ field: { onBlur, onChange, value } }) => (
              <InputField
                label="Hora"
                style={{ minWidth: 160 }}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
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
                />
              </Option>
            )}
          />

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
                />
              </Option>
            )}
          />
        </OptionsContainer>

        <CreateMealButtonContainer>
          <Button
            title="Cadastrar refeição"
            onPress={handleSubmit(submit)}
          />
        </CreateMealButtonContainer>
      </MainContent>
    </Container>
  )
}
