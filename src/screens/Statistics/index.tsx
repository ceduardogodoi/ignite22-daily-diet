import { FlatList, TouchableOpacity } from 'react-native'

import {
  Header,
  Description,
  Percentage,
  Heading,
  Container,
  MainContent,
  Box,
  BoxTitle,
  BoxDescription,
  StatusBar,
  LeftArrowButton,
} from './styles'

import type { BoxStatus } from './styles'

type Data = {
  id: string,
  amount: number,
  title: string,
  status: BoxStatus,
}[]

const data: Data = [
  {
    id: '1',
    amount: 99,
    title: 'refeições dentro da dieta',
    status: 'success',
  },
  {
    id: '2',
    amount: 10,
    title: 'refeições dentro fora da dieta',
    status: 'fail',
  },
];

export function Statistics() {
  return (
    <Container>
      <StatusBar barStyle="dark-content" />

      <Header>
        <TouchableOpacity>
          <LeftArrowButton />
        </TouchableOpacity>

        <Percentage>
          90,86%
        </Percentage>
        <Description>
          das refeições dentro da dieta
        </Description>
      </Header>

      <MainContent>
        <Heading>Estatísticas gerais</Heading>

        <Box>
          <BoxTitle>22</BoxTitle>

          <BoxDescription>
            melhor sequência de pratos dentro da dieta
          </BoxDescription>
        </Box>

        <Box>
          <BoxTitle>109</BoxTitle>

          <BoxDescription>
            melhor sequência de pratos dentro da dieta
          </BoxDescription>
        </Box>

        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Box fullWidth={false} status={item.status}>
              <BoxTitle>{item.amount}</BoxTitle>

              <BoxDescription>
                {item.title}
              </BoxDescription>
            </Box>
          )}
          contentContainerStyle={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        />
      </MainContent>
    </Container>
  )
}
