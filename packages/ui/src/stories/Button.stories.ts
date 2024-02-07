import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@/components'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: Button
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: 'default',
    children: 'Button'
  }
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Button'
  }
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Button'
  }
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Button'
  }
}
