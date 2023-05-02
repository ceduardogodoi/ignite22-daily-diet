import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { Controller, useForm } from 'react-hook-form'
import { parse } from 'date-fns'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Button } from '@components/Button'
import { InputField } from '@components/Field'
import { Select } from '@components/Select'
import { StatusBar } from '@components/StatusBar'
import { ErrorMessage, Label } from '@components/Typography'

import { AppNavigatorRoutesProps, AppRoutes } from '@routes'

import { useAppContext } from '@store/AppContextProvider'

import { Meal, MealDTO } from '@models/Meal'

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

const schema = z.object({
  id: z.string()
    .uuid()
    .optional(),
  time: z.string({
    required_error: 'Hora é obrigatória',
  })
    .regex(/^\d{2}:\d{2}$/, 'Formato: HH:mm')
    .refine(value => {
      const date = parse(`01/01/2023 ${value}:00`, 'dd/MM/yyyy HH:mm:ss', new Date())
      const isValidDate = !Number.isNaN(date.getTime())
      return isValidDate
    }, {
      message: 'Horário inválido'
    }),
  meal: z.string({
    required_error: 'Nome é obrigatório',
  })
    .trim()
    .min(3, `Deve ter mínimo 3 caracteres`),
  description: z.string()
    .optional(),
  status: z.enum(['bad', 'good'], {
    required_error: 'Escolha uma opção',
  }),
  eatenAt: z.string({
    required_error: 'Data é obrigatória',
  })
    .regex(/^\d{2}\/\d{2}\/\d{4}$/, 'Formato: dd/MM/aaaa')
    .refine(value => {
      const date = parse(value, 'dd/MM/yyyy', new Date())
      const isValidDate = !Number.isNaN(date.getTime())
      return isValidDate
    }, {
      message: 'Data inválida'
    })
})

type FormData = z.output<typeof schema>

export function AddEditMeal() {
  const navigation = useNavigation<AppNavigatorRoutesProps>()

  const route = useRoute<RouteProp<AppRoutes, 'AddEditMeal'>>()
  const meal = route.params?.meal

  let editingMeal: Meal | undefined
  if (meal) {
    editingMeal = {
      ...meal,
    }
  }

  const { addMeal, updateMeal } = useAppContext()

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors }
  } = useForm<FormData>({
    defaultValues: editingMeal,
    resolver: zodResolver(schema)
  })
  const status = watch('status')

  const isValid = true

  function handleArrowPress() {
    navigation.navigate('Home')
  }

  function submit(data: FormData) {
    console.log(JSON.stringify(data, null, 2))
    // if (editingMeal) {
    //   const editedMeal: Meal = {
    //     id: editingMeal.id,
    //     ...data
    //   }
    //   updateMeal(editedMeal)
    //   return
    // }

    // addMeal(data)
  }

  // console.log(JSON.stringify(errors, null, 2))

  return (
    <Container>
      <StatusBar barStyle="dark-content" />

      <Header>
        <LeftArrowButtonContainer onPress={handleArrowPress}>
          <LeftArrowButton />
        </LeftArrowButtonContainer>

        <TitleContainer>
          <Title>{meal ? 'Editar' : 'Nova'} refeição</Title>
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
              mandatory
              error={errors.meal?.message}
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
              error={errors.description?.message}
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
                mandatory
                style={{ minWidth: '47.5%' }}
                keyboardType="number-pad"
                mask="date"
                maxLength={10}
                error={errors.eatenAt?.message}
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
                mandatory
                style={{ minWidth: '47.5%' }}
                keyboardType="number-pad"
                mask="time"
                maxLength={5}
                error={errors.time?.message}
              />
            )}
          />
        </DateTimeContainer>

        <Label>Está dentro da dieta?*</Label>
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

          <Separator style={{ minWidth: '5%' }} />

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
        {Boolean(errors.status?.message) && (
          <ErrorMessage>{errors.status?.message}</ErrorMessage>
        )}

        {isValid && <CreateMealButtonContainer>
          <Button
            disabled={!isValid}
            title={editingMeal ? 'Salvar alterações' : 'Cadastrar refeição'}
            onPress={handleSubmit(submit)}
          />
        </CreateMealButtonContainer>}
      </MainContent>
    </Container>
  )
}
