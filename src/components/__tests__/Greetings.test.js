import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Greetings from '../Greetings.vue'

describe('Greetings', () => {
  it('renders properly', () => {
    const wrapper = mount(Greetings, { props: { msg: 'Hello World' } })
    expect(wrapper.text()).toContain('Hello World')
  })
})
