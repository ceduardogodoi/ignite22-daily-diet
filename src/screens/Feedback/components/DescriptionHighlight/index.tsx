import { Description, Highlight } from './styles'

type DescriptionHighlightProps = {
  variant: 'good' | 'bad'
}

export function DescriptionHighlight({ variant }: DescriptionHighlightProps) {
  if (variant === 'bad') {
    return (
      <Description>
        Você <Highlight>saiu da dieta</Highlight> dessa vez, mas continue se esforçando e não desista!
      </Description>
    )
  }

  return (
    <Description>
      Você continua <Highlight>dentro da dieta</Highlight>. Muito bem!
    </Description>
  )
}