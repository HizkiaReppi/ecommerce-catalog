import ProductCard from '@/components/ProductCard.vue'
import { mount } from '@vue/test-utils'
import axios from '@/libs/axios'
import { vitest, beforeEach, afterEach, describe, it, expect } from 'vitest'

// Mock axios module
vitest.mock('@/libs/axios')

describe('ProductCard', () => {
  let wrapper

  beforeEach(() => {
    // Mock axios get method
    axios.get.mockResolvedValueOnce({
      data: {
        id: 1,
        title: 'Sample Product',
        category: "men's clothing",
        description: 'Sample description',
        rating: { rate: 4.5 },
        price: 50,
        image: 'sample-image.jpg'
      }
    })

    // Mount the component
    wrapper = mount(ProductCard)
  })

  afterEach(() => {
    // Clear axios mock data
    axios.get.mockClear()
  })

  it('fetches product data and updates state correctly', async () => {
    // Check if axios.get is called with the correct URL
    expect(axios.get).toHaveBeenCalledWith('/products/1')

    // Check if product data is set correctly after mounting
    expect(wrapper.vm.product.id).toBe(1)
    expect(wrapper.vm.product.title).toBe('Sample Product')
    expect(wrapper.vm.product.category).toBe("men's clothing")
    expect(wrapper.vm.product.description).toBe('Sample description')
    expect(wrapper.vm.product.rating.rate).toBe(4.5)
    expect(wrapper.vm.product.price).toBe(50)
    expect(wrapper.vm.product.image).toBe('sample-image.jpg')

    // Check if loading state is set to false after data is loaded
    expect(wrapper.vm.isLoading).toBe(false)
  })

  // render product data
  it('renders product data correctly', () => {
    // Check if product data is rendered correctly
    expect(wrapper.find('.product-title').text()).toBe('Sample Product')
    expect(wrapper.find('.product-description').text()).toBe('Sample description')
    expect(wrapper.find('.product-label').text()).toBe("men's clothing4.5/5")
    expect(wrapper.find('.product-rate').text()).toBe('4.5/5')
    expect(wrapper.find('.product-price').text()).toBe('$50')

    const img = wrapper.find('.product-image img')
    expect(img.attributes('src')).toBe('sample-image.jpg')
  })

  // render update product data
  it('updates product data correctly', async () => {
    // Set currentProductId to 2
    wrapper.vm.currentProductId = 2

    // Mock axios get method
    axios.get.mockResolvedValueOnce({
      data: {
        id: 2,
        title: 'Updated Product',
        category: 'women clothing',
        description: 'Updated description',
        rating: { rate: 3.5 },
        price: 100,
        image: 'updated-image.jpg'
      }
    })

    // Call the method to update product data
    await wrapper.vm.getProducts()

    // Check if axios.get is called with the correct URL
    expect(axios.get).toHaveBeenCalledWith('/products/2')

    // Check if product data is set correctly after updating
    expect(wrapper.vm.product.id).toBe(2)
    expect(wrapper.vm.product.title).toBe('Updated Product')
    expect(wrapper.vm.product.category).toBe('women clothing')
    expect(wrapper.vm.product.description).toBe('Updated description')
    expect(wrapper.vm.product.rating.rate).toBe(3.5)
    expect(wrapper.vm.product.price).toBe(100)
    expect(wrapper.vm.product.image).toBe('updated-image.jpg')
  })

  // render update product data
  it('renders updated product data correctly', async () => {
    // Set currentProductId to 2
    wrapper.vm.currentProductId = 2

    // Mock axios get method
    axios.get.mockResolvedValueOnce({
      data: {
        id: 2,
        title: 'Updated Product',
        category: 'women clothing',
        description: 'Updated description',
        rating: { rate: 3.5 },
        price: 100,
        image: 'updated-image.jpg'
      }
    })

    // Call the method to update product data
    await wrapper.vm.getProducts()

    // Check if axios.get is called with the correct URL
    expect(axios.get).toHaveBeenCalledWith('/products/2')

    // Check if product data is rendered correctly after updating
    expect(wrapper.find('.product-title').text()).toBe('Updated Product')
    expect(wrapper.find('.product-description').text()).toBe('Updated description')
    expect(wrapper.find('.product-label').text()).toBe('women clothing3.5/5')
    expect(wrapper.find('.product-rate').text()).toBe('3.5/5')
    expect(wrapper.find('.product-price').text()).toBe('$100')

    const img = wrapper.find('.product-image img')
    expect(img.attributes('src')).toBe('updated-image.jpg')
  })
})
