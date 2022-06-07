import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Box } from '.'

export default {
  title: 'Layout/Box',
  component: Box,
} as ComponentMeta<typeof Box>

export const Primary: ComponentStory<typeof Box> = () => (
  <Box fontSize="lg">Box</Box>
)
