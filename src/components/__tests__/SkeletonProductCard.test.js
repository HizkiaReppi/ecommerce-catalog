import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import SkeletonProductCard from '@/components/SkeletonProductCard.vue'

describe('SkeletonProductCard', () => {
  it('applies animation to skeleton elements', async () => {
    // Mount the component
    const wrapper = mount(SkeletonProductCard)

    // Check if animation is applied to skeleton image
    const imageAnimation = wrapper.find('.skeleton-image').classes('animation-pulse')
    expect(imageAnimation).toBe(true)

    // Check if animation is applied to skeleton content
    const contentAnimation = wrapper.find('.skeleton-content').classes('animation-pulse')
    expect(contentAnimation).toBe(true)
  })

  it('does not apply animation to other elements', async () => {
    // Mount the component
    const wrapper = mount(SkeletonProductCard)

    // Check if animation is not applied to elements without animation-pulse class
    const nonAnimatedElements = [
      '.container',
      '.skeleton-card',
      '.skeleton-title',
      '.skeleton-detail'
    ]
    nonAnimatedElements.forEach((selector) => {
      const element = wrapper.find(selector).classes('animation-pulse')
      expect(element).toBe(false)
    })
  })
})
